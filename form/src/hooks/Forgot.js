import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";

const Forgot = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleReset = () => {

    let valid = true;

    const emailValidation = validateEmail(email);

    if (emailValidation) {
      setError(emailValidation);
      valid = false;
    }

    if (!valid) return;

    setShowModal(true);

    console.log("Password reset link sent to", email);
  };

  return {
    email,
    error,
    showModal,
    setEmail,
    setError,
    setShowModal,
    handleReset
  };
};

export default Forgot;