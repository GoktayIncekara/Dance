import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
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
        <div className="nav-buttons">
          <button onClick={() => navigate("./login")} className="button-64">
            <span className="text">Giriş Yap</span>
          </button>
          <button onClick={() => navigate("./register")} className="button-64">
            <span className="text">Üye Ol!</span>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
