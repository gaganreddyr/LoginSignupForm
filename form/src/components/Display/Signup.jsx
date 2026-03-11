import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import "./Signup.css";

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

  const regions = ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi"];

  const handleSignup = () => {
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
    if (!password) {
      setPassError("Please enter a password");
      valid = false;
    }
    else if (password !== confirmPassword) {
      setConfirmPassError("Passwords do not match");
      valid = false;
    }
    if (!username) {
      setUsernameError("Please enter a username");
      valid = false;
    }
    if (!region) {
      setRegionError("Please select a region");
      valid = false;
    }
    if (!valid) return;

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

    </>
  );
};

export default SignupForm;