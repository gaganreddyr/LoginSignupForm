import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Forgot.css";

const ForgotPassword = ({ changeMode }) => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSendLink = () => {

    let valid = true; 
    const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!email) {
      setError("Please enter an email");
      valid = false;
    } 
    else if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      valid = false;
    }
    if (!valid) return;

    console.log("Reset link sent to", email);
  };

  return (
    <>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        error={error}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
      />

      <div className="buttons">
        <Button
          text="Send Reset Link"
          type="primary"
          onClick={handleSendLink}
        />
      </div>

      <p>
      <Link to="/login" className="back" onClick={() => changeMode("login")}>
        Back to Login
      </Link>
      </p>

    </>
  );
};

export default ForgotPassword;