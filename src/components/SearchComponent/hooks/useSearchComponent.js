import { useState, useEffect } from "react";

function useSearchComponent({
  continent = true,
  language = false,
  onChangeGroup,
}) {
  let [target, setTarget] = useState({
    continent,
    language,
  });

  useEffect(() => {
    target.language ? onChangeGroup("languages") : onChangeGroup("continent");
    return () => {};
  }, []);

  return { target, setTarget };
}

export default useSearchComponent;
