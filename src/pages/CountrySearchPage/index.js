import React, { useState, useEffect } from "react";
import "./styles.css";
//Components
import { GroupSection, SearchComponent } from "../../components";
//Hooks
import { useQuery } from "@apollo/react-hooks";
//GrphQlQury
import { graphQL } from "../../services";
//Helpers
import { countrySplitByGroup } from "../../helpers";

function CountrySearchPage() {
  const { loading, error, data } = useQuery(graphQL.queries.GET_Countrys());
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("Ch");
  const [group, setGroup] = useState("");

  useEffect(() => {
    if (data) {
      let _countries = countrySplitByGroup({
        countries: data.countries,
        group,
      });
      setCountries(_countries);
    }
    return () => {};
  }, [group]);

  useEffect(() => {
    if (!loading) {
      let _countries = countrySplitByGroup({
        countries: data.countries,
        group,
      });
      setCountries(_countries);
    }
    return () => {};
  }, [loading]);

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
