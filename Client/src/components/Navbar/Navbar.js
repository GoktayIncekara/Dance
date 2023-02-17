import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { IoMdExit } from "react-icons/io";
import styles from "./navbar.module.css";

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
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [location, ctx]);

  return (
    <div>
      <div className={styles.nav}>
        <div>
          <Link id={styles.home} to="/">
            <div className={styles.logo_section}>
              <img src={Logo} className={styles.logo} alt="Logo" />
              <h2 className={styles.logo_text}> NonStop.</h2>
            </div>
          </Link>
        </div>
        <div className={styles.nav_links}>
          <Link className={styles.nav_link} to="/okullar">
            Dans Okulları
          </Link>
          <h1 className={styles.nav_seperator}>|</h1>
          <Link className={styles.nav_link} to="/geceler">
            Dans Geceleri
          </Link>
          <h1 className={styles.nav_seperator}>|</h1>
          <Link className={styles.nav_link} to="/festivaller">
            Dans Festivalleri
          </Link>
        </div>
        {!ctx.user ? (
          <div className={styles.nav_buttons}>
            <button
              onClick={() => navigate("./login")}
              className={styles.button_64}
            >
              <span>Giriş Yap</span>
            </button>
            <button
              onClick={() => navigate("./register")}
              className={styles.button_64}
            >
              <span>Üye Ol!</span>
            </button>
          </div>
        ) : (
          <div>
            <button onClick={logout} className={styles.button_64}>
              <span className={styles.button_logout_text}>
                <IoMdExit /> {ctx.user?.userObject?.fullname}
              </span>
            </button>
          </div>
        )}
      </div>
      <hr className={styles.nav_hr} />
    </div>
  );
}

export default Navbar;
