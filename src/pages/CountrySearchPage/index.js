import React, { useState } from "react";
import { GroupSection, SearchComponent } from "../../components";
import "./styles.css";
import { languageCountrysDummy } from "./dummys/country-dumy";
function CountrySearchPage() {
  const [countrys, setCountrys] = useState([]);
  let onChangeFilter = (value) => {
    console.log(value);
  };
  return (
    <section className="search-page__container" id="search">
      <div className="search-page__tittle">
        <h2>Country search</h2>
      </div>
      <div className="search-page__searcher">
        <SearchComponent onChange={onChangeFilter} />
      </div>
      <div className="search-page__groups">
        {languageCountrysDummy.map(({ countrys, group }) => (
          <GroupSection countrys={countrys} groupName={group} />
        ))}
      </div>
    </section>
  );
}

export default CountrySearchPage;
