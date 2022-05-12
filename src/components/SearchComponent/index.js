import React from "react";
import ButtonComponent from "../ButtonComponent";
import FilterComponent from "../FilterComponent";
import "./styles.css";
function SearchComponent() {
  return (
    <div className="seach-component__container">
      <div className="search-component__filter-input">
        <span>Some Random text</span>
        <FilterComponent />
      </div>
      <div className="seach-component__filter-button">
        <h3>Group by:</h3>
        <ButtonComponent />
        <ButtonComponent />
      </div>
    </div>
  );
}

export default SearchComponent;
