import React from "react";
import "./styles.css";
import magnifyingGlass from "./assets/imgs/magnifyin_glass.svg";
function FilterComponent({ onChange }) {
  return (
    <div className="input-component__container">
      <img src={magnifyingGlass} />
      <input
        className="input-component__input"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default FilterComponent;
