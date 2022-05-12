import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import FilterComponent from "../FilterComponent";
import "./styles.css";
function SearchComponent({ onChange }) {
  let [target, setTarget] = useState({
    continent: false,
    language: true,
  });
  return (
    <div className="seach-component__container">
      <div className="search-component__filter-input">
        <span>Some Random text</span>
        <FilterComponent onChange={onChange} />
      </div>
      <div className="seach-component__filter-button">
        <h3>Group by:</h3>
        <ButtonComponent
          status={target.continent}
          text="Continent"
          onClick={() => {
            setTarget({
              continent: true,
              language: false,
            });
          }}
        />
        <ButtonComponent
          status={target.language}
          text="Language"
          onClick={() => {
            setTarget({
              continent: false,
              language: true,
            });
          }}
        />
      </div>
    </div>
  );
}

export default SearchComponent;
