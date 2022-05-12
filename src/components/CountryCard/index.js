import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
function CountryCard({ props, filter }) {
  const { name, phone, time, code, capital, currency, emoji } = props;
  console.log(props);
  return name.includes(filter) && filter ? (
    <article className="country-card__container">
      <header className="country-card__header">
        <div className="country-card__header-left">
          <span >
            <img
              src={`/assets/imgs/flags/${code.toLowerCase()}.png`}
              alt={name}
            />
          </span>
          <h4>{name}</h4>
        </div>
        <div className="country-card__header-right">
          <span>{emoji}</span>
        </div>
      </header>
      <div className="country-card__information">
        <span>
          <FontAwesomeIcon icon={faGlobe} /> {capital}
        </span>

        <span>
          <FontAwesomeIcon icon={faPhone} /> +{phone}
        </span>
        <span>
          <FontAwesomeIcon icon={faMoneyBill1} /> {currency}
        </span>
      </div>
    </article>
  ) : (
    <></>
  );
}

export default CountryCard;
