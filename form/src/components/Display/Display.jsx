import React, { useState } from "react";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Forgot from "../../pages/Forgot";
import "./Display.css";

const Display = () => {

  const [mode, setMode] = useState("login");

  const changeMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="data">

      <h1 className="title">
        {mode === "signup"
          ? "Signup"
          : mode === "forgot"
          ? "Forgot Password"
          : "Login"}
      </h1>

      {mode === "login" && <Login changeMode={changeMode} />}
      {mode === "signup" && <Signup changeMode={changeMode} />}
      {mode === "forgot" && <Forgot changeMode={changeMode} />}

    </div>
  );
};

export default Display;