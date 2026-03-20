import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import PasswordToggle from "../components/PasswordToggle/PasswordToggle";
import Loginhook from "../hooks/Loginhook";
import "./Login.css";

const Login = ({ changeMode }) => {

  const {
    email, password, error, passError, showModal, 
    setEmail, setPassword, setError, setPassError, setShowModal, 
    handleLogin} = Loginhook();

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

      <PasswordToggle
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

      <div>

      <Modal
        open={showModal}
        message="Login Successful!"
        onClose={() => setShowModal(false)}
      />

      </div>

    </>
  );
};

export default Login;