import React, { useEffect, useContext } from "react";
import decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

export const useAuthenticate = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    ctx.setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const token = ctx.user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [location, ctx]);

  return { ctx, logout };
};
