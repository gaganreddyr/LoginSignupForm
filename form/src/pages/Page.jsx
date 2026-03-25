import React from "react";
import Display from "../components/Display/Display";
import "./Page.css";
import Theme from "../hooks/Themehook";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch";

const Page = () => {
  const { theme, toggleTheme } = Theme();

  return (
    <div className="page">
      <Display theme={theme} toggleTheme={toggleTheme} />
      <div className="theme-switch">
          <ToggleSwitch 
            checked={theme === "dark"} 
            onChange={toggleTheme} 
            onText="Dark"
            offText="Light"
          />
        </div>
    </div>
    
  );
};

export default Page;