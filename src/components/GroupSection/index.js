import React, { createRef, useEffect, useState } from "react";
import "./styles.css";
import { CountryCard } from "../";
function GroupSection({
  groupName = "No group name provided",
  countries = [],
  filter,
  group,
}) {
  let [show, setShow] = useState(true);
  let ref = createRef();
  useEffect(() => {
    Array.from(ref.current.children[1].children).length > 0
      ? setShow(true)
      : setShow(false);
    return () => {};
  }, [filter, group]);

  return (
    <div
      className="group-section__container"
      ref={ref}
      style={{
        display: `${show ? "block" : "none"}`,
      }}
    >
      <h3 className="group-section__tittle">{groupName}</h3>
      <div className="group-section__content">
        {countries
          .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
          .map((props, i) => (
            <React.Fragment key={i}>
              <CountryCard props={props} filter={filter} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default GroupSection;
