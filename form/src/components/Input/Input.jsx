import React from "react";
import "./Input.css";

const Input = ({ type, placeholder, value, onChange, error }) => {
  return (
    <div className={error ? "inputBox errorBox" : "inputBox"}>
      <input
        type={type}
        placeholder={error ? error : placeholder}
        value={error ? "" : value}
        onChange={onChange}
        className={error ? "input errorPlaceholder" : "input"}
      />
    </div>
  );
};

export default Input;