import React, { useState, useEffect } from "react";
import "./styles.css";
//Components
import { GroupSection, SearchComponent } from "../../components";
//Hooks
import { useQuery } from "@apollo/react-hooks";
//GrphQlQury
import { graphQL } from "../../services";
//Dummy
import { languageCountrysDummy } from "./dummys/country-dumy";
function CountrySearchPage() {
  const { loading, error, data } = useQuery(graphQL.queries.GET_Countrys());
  const [countries, setCountries] = useState([]);
  let onChangeFilter = (filter) => {};
  let onChangeGroup = (groupGroup) => {};

  useEffect(() => {
    if (!loading) setCountries(data);
    return () => {};
  }, [loading]);

  return (
    <section className="search-page__container" id="search">
      <div className="search-page__tittle">
        <h2>Country search</h2>
      </div>
      <div className="search-page__searcher">
        <SearchComponent
          onChangeFilter={onChangeFilter}
          onChangeGroup={onChangeGroup}
        />
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
