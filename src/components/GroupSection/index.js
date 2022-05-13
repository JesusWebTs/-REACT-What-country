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
  let [child, setChild] = useState(0);
  let ref = createRef();
  useEffect(() => {
    Array.from(ref.current.children[1].children).length || child > 0
      ? setShow(true)
      : setShow(false);
    return () => {};
  }, [filter, group, ref, child]);
  useEffect(() => {
    setChild(0);
    return () => {};
  }, [group]);

  return (
    <div
      className="group-section__container"
      ref={ref}
      style={{
        display: `${show && filter.length > 0 ? "block" : "none"}`,
      }}
    >
      <h3 className="group-section__tittle">{groupName}</h3>
      <div className="group-section__content">
        {countries
          .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
          .map((props, i) => (
            <React.Fragment key={i}>
              <CountryCard props={props} filter={filter} setChild={setChild} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default GroupSection;
