import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import { IoMdExit } from "react-icons/io";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useAuthenticate } from "../../helpers/useAuthenticate";

function Navbar() {
  const navigate = useNavigate();
  const { ctx, logout } = useAuthenticate();

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
                <IoMdExit />
                {ctx.user?.userObject.fullname
                  ? ctx.user?.userObject.fullname
                  : ctx.user?.userObject.schoolname}
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
