import React, { useState } from "react";

function FormInput({
  placeholder,
  name,
  type,
  onChange,
  errorMessage,
  required,
  pattern,
  disabled,
}) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <input
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        pattern={pattern}
        onBlur={handleFocus}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
        disabled={disabled}
      ></input>
      <span className="error">{errorMessage}</span>
    </div>
  );
}

export default FormInput;
