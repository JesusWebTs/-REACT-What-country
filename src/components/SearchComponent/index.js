import React, { useState, useEffect } from "react";
import ButtonComponent from "../ButtonComponent";
import FilterComponent from "../FilterComponent";
import "./styles.css";
function SearchComponent({ onChangeFilter, onChangeGroup, filter }) {
  let [target, setTarget] = useState({
    continent: true,
    language: false,
  });

  useEffect(() => {
    target.language ? onChangeGroup("languages") : onChangeGroup("continent");
    return () => {};
  }, []);

  return (
    <div className="search-component__container">
      <div className="search-component__filter-input">
        <span>Some Random text</span>
        <FilterComponent onChange={onChangeFilter} value={filter} />
      </div>
      <div className="search-component__filter-button">
        <h3>Group by:</h3>
        <div className="search-component__controls">
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
    </div>
  );
}

export default SearchComponent;
