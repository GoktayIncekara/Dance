import React from "react";

function Contact() {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Bize ulaşın!</h1>
      <p className="contact-desc">
        Lütfen herhangi bir problemde bize ulaşmaktan çekinmeyin.
      </p>
      <div className="contact-container">
        <a className="contact-input" href="mailto:goktayincekara@gmail.com">
          Bize mail atın!
        </a>
      </div>
    </div>
  );
}

export default Contact;
