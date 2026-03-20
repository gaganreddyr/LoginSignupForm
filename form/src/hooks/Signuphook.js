import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";
import { validatePassword } from "../utils/validatePassword";
import { validateUsername } from "../utils/validateUsername"; 

const Signuphook = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [region, setRegion] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [regionError, setRegionError] = useState("");

  const [showRules, setShowRules] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const regions = ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi"];

  const handleSignup = () => {

    let valid = true;

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const usernameValidation = validateUsername(username);

    if (usernameValidation) {
      setUsernameError(usernameValidation);
      valid = false;
    }

    if (emailValidation) {
      setError(emailValidation);
      valid = false;
    }

    if (passwordValidation) {
      setPassError(passwordValidation);
      valid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPassError("Passwords do not match");
      valid = false;
    }

    if (!region) {
      setRegionError("Please select a region");
      valid = false;
    }

    if (!valid) return;

    setShowModal(true);

    console.log("Signup Success", { username, email, password, region });
  };

  return {
    username,
    email,
    password,
    confirmPassword,
    region,
    regions,

    usernameError,
    error,
    passError,
    confirmPassError,
    regionError,

    showRules,
    showModal,

    setUsername,
    setEmail,
    setPassword,
    setConfirmPassword,
    setRegion,

    setUsernameError,
    setError,
    setPassError,
    setConfirmPassError,
    setRegionError,

    setShowRules,
    setShowModal,

    handleSignup
  };
};

export default Signuphook;