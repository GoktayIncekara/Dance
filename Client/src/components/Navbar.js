import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { IoMdExit } from "react-icons/io";

function Navbar() {
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
    console.log("Token: ", token);
    console.log("ctx.user: ", ctx.user);
    console.log("Location: ", location);
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [location, ctx]);

  return (
    <div>
      <div className="nav">
        <div>
          <Link id="home" to="/">
            <div className="logo-section">
              <img src={Logo} className="logo" alt="Logo" />
              <h2 className="logo-text"> NonStop.</h2>
            </div>
          </Link>
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/okullar">
            Dans Okulları
          </Link>
          <h1 className="seperator">|</h1>
          <Link className="nav-link" to="/geceler">
            Dans Geceleri
          </Link>
          <h1 className="seperator">|</h1>
          <Link className="nav-link" to="/festivaller">
            Dans Festivalleri
          </Link>
        </div>
        {!ctx.user ? (
          <div className="nav-buttons">
            <button onClick={() => navigate("./login")} className="button-64">
              <span className="text">Giriş Yap</span>
            </button>
            <button
              onClick={() => navigate("./register")}
              className="button-64"
            >
              <span className="text">Üye Ol!</span>
            </button>
          </div>
        ) : (
          <div className="nav-buttons">
            <button onClick={logout} className="button-64">
              <span className="button-logout-text">
                <IoMdExit /> {ctx.user?.userObject?.fullname}
              </span>
            </button>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
