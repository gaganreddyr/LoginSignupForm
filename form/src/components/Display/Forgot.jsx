import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Forgot.css";
import Modal from "../Modal/Modal";


const ForgotPassword = ({ changeMode }) => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

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

    setShowModal(true);

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

      <div>

      <Modal
        open={showModal}
        message="Reset link sent to your email"
        onClose={() => setShowModal(false)}
      />

      </div>

    </>
  );
};

export default ForgotPassword;