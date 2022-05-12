import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
function CountryCard({
  name = "No Name",
  phoneId = "No Phone ID",
  flag,
  time = "No Time",
  filter,
}) {
  return name.includes(filter) && filter ? (
    <article className="country-card__container">
      <header className="country-card__header">
        <span>
          <img
            src={`/assets/imgs/flags/${flag.toLowerCase()}.png`}
            alt={name}
          />
        </span>
        <h4>{name}</h4>
      </header>
      <div className="country-card__information">
        <span>
          <FontAwesomeIcon icon={faPhone} /> {phoneId} 999.99.99
        </span>
        <time>
          <FontAwesomeIcon icon={faClock} /> {time}
        </time>
      </div>
    </article>
  ) : (
    <></>
  );
}

export default CountryCard;
