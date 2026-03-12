import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { validateEmail } from "../../utils/validateEmail";
import { validatePassword } from "../../utils/validatePassword";
import "./Signup.css";
import Modal from "../Modal/Modal";
import { validateUsername } from "../../utils/validateUsername";

const SignupForm = ({ changeMode }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [region, setRegion] = useState("");
  const [regionError, setRegionError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const regions = ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi"];

  const handleSignup = () => {
    let valid = true;
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const usernameValidation = validateUsername(username);

    if (emailValidation) {
      setError(emailValidation);
      valid = false;
    }
    if (passwordValidation) {
      setPassError(passwordValidation);
      valid = false;
    }
    else if (password !== confirmPassword) {
      setConfirmPassError("Passwords do not match");
      valid = false;
    }
    if (usernameValidation) {
      setUsernameError(usernameValidation);
      valid = false;
    }
    if (!region) {
      setRegionError("Please select a region");
      valid = false;
    }
    if (!valid) return;

    setShowModal(true);

    console.log("Signup Success", { email, password, confirmPassword, region });
  };

  return (
    <>

      <Input 
        type="text" 
        placeholder="Username"
        value={username}
        error={usernameError}
        onChange={(e) => {
          setUsername(e.target.value);
          setUsernameError("");
        }}
      />

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
      
      <div className="password-wrapper">

        <Input
          type="password"
          placeholder="Password"
          value={password}
          error={passError}
          onFocus={() => setShowRules(true)}
          onBlur={() => setShowRules(false)}
          onChange={(e) => {
            setPassword(e.target.value);
            setPassError("");
          }}
        />

        {showRules && (
          <div className="password-tooltip">
            <ul>
              <li>Minimum 8 characters</li>
              <li>1 number</li>
              <li>1 uppercase letter</li>
              <li>1 lowercase letter</li>
              <li>1 special character</li>
            </ul>
          </div>
        )}

      </div>

      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        error={confirmPassError}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setConfirmPassError("");
        }}
      />

      <Dropdown
        options={regions}
        label="Select Region"
        value={region}
        error={regionError}
        onSelect={(val) =>{
          setRegion(val);
          setRegionError("");
        }}
      />

      <div className="buttons">
        <Button
          text="Sign Up"
          type="primary"
          onClick={handleSignup}
        />
      </div>

      <p>
      <Link to="/login" className="login" onClick={() => changeMode("login")}>
        Already have an account? Click here to Login
      </Link>
      </p>

      <div>

      <Modal
        open={showModal}
        message="Account Created Successfully!"
        onClose={() => setShowModal(false)}
      />

      </div>        

    </>
  );
};

export default SignupForm;