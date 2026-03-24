import React from "react";
import Display from "../components/Display/Display";
import "./Page.css";
import Theme from "../hooks/Themehook";

const Page = () => {
  const { theme, toggleTheme } = Theme();

  return (
    <div className="page">
      <Display theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Page;