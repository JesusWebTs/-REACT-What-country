import React from "react";
import { GroupSection, SearchComponent } from "../../components";
import "./styles.css"
function CountrySearchPage() {
  return (
    <section className="search-page__container" id="search">
      <div className="search-page__tittle">
        <h2>Country search</h2>
      </div>
      <div className="search-page__searcher">
        <SearchComponent />
      </div>
      <div className="search-page__groups">
        <GroupSection />
      </div>
    </section>
  );
}

export default CountrySearchPage;
