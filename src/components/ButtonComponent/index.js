import React from "react";
import "./styles.css";
function ButtonComponent({ text = "No text", onClick, status = true }) {
  return (
    <button
      className={`button-component ${status && "button-component--active"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
