import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.general_infos}>
        <h3>NonStop.</h3>
        <h4>Dans severlerin buluştuğu güvenli yer</h4>
      </div>
      <div className={styles.footer_seperator}></div>
      <div className={styles.contact_infos}>
        <AiOutlineFacebook
          className={styles.footer_icon}
          size={90}
          color="white"
        />
        <AiOutlineLinkedin
          className={styles.footer_icon}
          size={90}
          color="white"
        />
        <AiOutlineInstagram
          className={styles.footer_icon}
          size={90}
          color="white"
        />
      </div>
    </div>
  );
}

export default Footer;
