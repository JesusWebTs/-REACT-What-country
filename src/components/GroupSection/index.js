import React from "react";
import "./styles.css";
import { CountryCard } from "../";
function GroupSection({ groupName = "No group name provided", countrys = [] }) {
  return (
    <div className="group-section__container">
      <h3 className="group-section__tittle">{groupName}</h3>
      <div className="group-section__content">
        {countrys.map(({ name, phoneId, flag, time }, i) => (
          <React.Fragment key={i}>
            <CountryCard
              name={name}
              phoneId={phoneId}
              flag={flag}
              time={time}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default GroupSection;
