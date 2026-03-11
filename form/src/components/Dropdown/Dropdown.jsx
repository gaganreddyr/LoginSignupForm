import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Dropdown.css";

const Dropdown = ({ options, label, value, onSelect, error }) => {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="dropdown">

      <div 
        className={error ? "inputBox dropdown-input errorBox" : "inputBox dropdown-input"} 
        onClick={() => setOpen(!open)}
      >
        <span className={error ? "errorText" : ""}>
          {error ? error : selected || label}
        </span>
        {open ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      {open && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => {
                setSelected(option);
                setOpen(false);
                onSelect?.(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default Dropdown;