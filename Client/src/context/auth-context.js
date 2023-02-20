import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  console.log("context rendered");
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    console.log("context user effect rendered");
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
