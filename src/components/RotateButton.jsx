import React, { useState } from "react";
import "./RotateButton.css";

const RotateButton = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1500);
  };

  return (
    <button
      className={`rotate-button ${isRotating ? "rotate" : ""}`}
      onClick={handleClick}
    >
      Rotate Me
    </button>
  );
};

export default RotateButton;
