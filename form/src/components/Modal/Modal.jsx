import React from "react";
import "./Modal.css";

const Modal = ({ open, message, onClose }) => {

  if (!open) return null;

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <p>{message}</p>

        <button className="modalButton" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;