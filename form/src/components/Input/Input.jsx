import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, value, onChange, error, onFocus, onBlur }) => {
  return (
    <div className={error ? "inputBox errorBox" : "inputBox"}>
      <input
        type={type}
        placeholder={error ? error : placeholder}
        value={error ? "" : value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={error ? "input errorPlaceholder" : "input"}
      />
    </div>
  );
};

export default Input;