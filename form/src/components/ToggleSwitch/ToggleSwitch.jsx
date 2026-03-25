import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ checked, onChange, label, onText, offText }) => {
  return (
    <div className="toggle-container">
      {label && <span className="toggle-label">{label}</span>}
      
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="slider">
          <span className="slider-text">
            {checked ? onText : offText}
          </span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;