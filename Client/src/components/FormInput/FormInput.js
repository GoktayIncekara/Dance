import React, { useState } from "react";
import styles from "./formInput.module.css";

function FormInput({ name, errorMessage, ...rest }) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.container}>
      <input
        name={name}
        onBlur={handleFocus}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
        {...rest}
      ></input>
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
