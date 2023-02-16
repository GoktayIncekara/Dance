import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="general-infos">
        <h3>NonStop.</h3>
        <h4>Dans severlerin buluştuğu güvenli yer</h4>
      </div>
      <div className="footer-seperator"></div>
      <div className="contact-infos">
        <AiOutlineFacebook className="footer-icon" size={90} color="white" />
        <AiOutlineLinkedin className="footer-icon" size={90} color="white" />
        <AiOutlineInstagram className="footer-icon" size={90} color="white" />
      </div>
    </div>
  );
}

export default Footer;
