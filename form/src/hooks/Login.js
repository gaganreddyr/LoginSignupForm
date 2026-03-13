import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {

    let valid = true;

    const emailValidation = validateEmail(email);

    if (emailValidation) {
      setError(emailValidation);
      valid = false;
    }

    if (!password) {
      setPassError("Please enter a password");
      valid = false;
    }

    if (!valid) return;

    setShowModal(true);

    console.log("Login success", { email, password });
  };

  return {
    email,
    password,
    error,
    passError,
    showModal,
    setEmail,
    setPassword,
    setError,
    setPassError,
    setShowModal,
    handleLogin
  };
};

export default Login;