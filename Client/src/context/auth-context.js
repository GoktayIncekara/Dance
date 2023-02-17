import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
