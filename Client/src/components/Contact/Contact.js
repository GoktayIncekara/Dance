import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contact_section}>
      <h1 className={styles.contact_title}>Bize ulaşın!</h1>
      <p className={styles.contact_desc}>
        Lütfen herhangi bir problemde bize ulaşmaktan çekinmeyin.
      </p>
      <div className={styles.mail_container}>
        <a
          className={styles.contact_input}
          href="mailto:goktayincekara@gmail.com"
        >
          Bize mail atın!
        </a>
      </div>
    </div>
  );
}

export default Contact;
