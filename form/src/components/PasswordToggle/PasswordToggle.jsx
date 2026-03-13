import React, { useState } from "react";
import Input from "../Input/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./PasswordToggle.css";

const PasswordToggle = ({
  placeholder,
  value,
  error,
  onChange,
  onFocus,
  onBlur
}) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-toggle">

      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        error={error}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <span
        className="eye-icon"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>

    </div>
  );
};

export default PasswordToggle;