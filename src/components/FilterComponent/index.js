import React from "react";
import "./styles.css";
import magnifyingGlass from "./assets/imgs/magnifyin_glass.svg";
function FilterComponent() {
  return (
    <div className="input-component__container">
      <img src={magnifyingGlass} />
      <input className="input-component__input" />
    </div>
  );
}

export default FilterComponent;
