import React from "react";
import "./styles.css";
//Components
import { GroupSection, SearchComponent } from "../../components";
//GrphQlQury
import { graphQL } from "../../services";
//Hooks
import { useCountries } from "./hooks";

function CountrySearchPage() {
  const { countries, filter, loading, setGroup, setFilter } = useCountries({
    query: graphQL.queries.GET_Countrys(),
  });

  return (
    <section className="search-page__container" id="search">
      <div className="search-page__tittle">
        <h2>Country search</h2>
      </div>
      <div className="search-page__searcher">
        <SearchComponent
          onChangeFilter={(value) => setFilter(value)}
          filter={filter}
          onChangeGroup={(value) => setGroup(value)}
        />
      </div>
      {loading ? <h3>Loading</h3> : ""}
      <div className="search-page__groups">
        {countries.map(({ countries, group }) => (
          <GroupSection
            countries={countries}
            groupName={group}
            filter={filter}
            group={group}
          />
        ))}
      </div>
    </section>
  );
}

export default CountrySearchPage;
