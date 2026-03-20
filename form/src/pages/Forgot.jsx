import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import Forgothook from "../hooks/Forgothook";
import "./Forgot.css";

const Forgot = ({ changeMode }) => {

  const {
    email, error, showModal, 
    setEmail, setError, setShowModal, 
    handleReset} = Forgothook();

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
          onClick={handleReset}
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

export default Forgot;