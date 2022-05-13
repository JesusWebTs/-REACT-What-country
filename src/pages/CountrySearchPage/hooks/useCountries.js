import { useState, useEffect } from "react";
//Hooks
import { useQuery } from "@apollo/react-hooks";
//Helpers
import { countrySplitByGroup } from "../../../helpers";

function useCountries({ query }) {
  const { loading, error, data } = useQuery(query);
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("Chi");
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

  return {
    group,
    filter,
    countries,
    loading,
    setFilter,
    setCountries,
    setGroup,
  };
}

export default useCountries;
