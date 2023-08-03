import React from "react";
import "./CustomPopup.css";

const CustomPopup = ({ content, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h1>{content}</h1>
        <audio src="/audio.wav" autoPlay loop />
        <button className='close-btn' onClick={onClose}>x</button>
      </div>
    </div>
  );
};

export default CustomPopup;
