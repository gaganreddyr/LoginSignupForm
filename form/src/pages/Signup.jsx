import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Dropdown from "../components/Dropdown/Dropdown";
import Modal from "../components/Modal/Modal";
import PasswordToggle from "../components/PasswordToggle/PasswordToggle";
import Signup from "../hooks/Signup";
import "./Signup.css";


const Signupform = ({ changeMode }) => {

  const {
    username, email, password, confirmPassword, region, regions, usernameError, error, passError, confirmPassError, regionError, showRules, showModal,
    setUsername, setEmail, setPassword, setConfirmPassword, setRegion, setUsernameError, setError, setPassError, setConfirmPassError, setRegionError, setShowRules, setShowModal,
    handleSignup} = Signup();

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

        <PasswordToggle
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

      <PasswordToggle
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

export default Signupform;