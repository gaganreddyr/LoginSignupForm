import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Login.css";

const LoginForm = ({ changeMode }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  
  const handleLogin = () => {

    let valid = true;

    const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!email) {
      setError("Please enter an email");
      valid = false;
    } 
    else if (!emailRegex.test(email)) {
      setError(" Please enter a valid email");
      valid = false;
    }
    if (!password) {
      setPassError("Please enter a password");
      valid = false;
    }
    if (!valid) return;

    console.log("Login success", { email, password });
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

      <Input
        type="password"
        placeholder="Password"
        value={password}
        error={passError}
        onChange={(e) => {
          setPassword(e.target.value);
          setPassError("");
        }}
      />

      <p>
      <Link to="/forgot-password" className="forgot" onClick={() => changeMode("forgot")}>
        Forgot Password?
      </Link>
      </p>

      <div className="buttons">
        <Button
          text="Login"
          type="primary"
          onClick={handleLogin}
        />
      </div>
      
      <p>
      <Link to="/signup" className="signup" onClick={() => changeMode("signup")}>
        New User? Click here to Signup
      </Link>
      </p>

    </>
  );
};

export default LoginForm;