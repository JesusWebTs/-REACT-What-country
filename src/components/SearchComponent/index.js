import React, { useState, useEffect } from "react";
import ButtonComponent from "../ButtonComponent";
import FilterComponent from "../FilterComponent";
import "./styles.css";
function SearchComponent({ onChangeFilter, onChangeGroup }) {
  let [target, setTarget] = useState({
    continent: false,
    language: true,
  });

  useEffect(() => {
    target.language ? onChangeGroup("languages") : onChangeGroup("continent");
    return () => {};
  }, []);

  return (
    <div className="seach-component__container">
      <div className="search-component__filter-input">
        <span>Some Random text</span>
        <FilterComponent onChange={onChangeFilter} />
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
            onChangeGroup("continent");
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
            onChangeGroup("languages");
          }}
        />
      </div>
    </div>
  );
}

export default SearchComponent;
