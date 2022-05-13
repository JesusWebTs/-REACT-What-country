import React, { useEffect, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
function CountryCard({ props, filter }) {
  const { name, phone, code, capital, currency, emoji } = props;
  const regExp = new RegExp(`^${filter}`, "i");
  const lowerName = name.toLowerCase();
  return regExp.test(name) && filter ? (
    <article className="country-card__container">
      <header className="country-card__header">
        <div className="country-card__header-left">
          <span>
            <img
              src={`/assets/imgs/flags/${code.toLowerCase()}.png`}
              alt={name}
            />
          </span>
          <h4>
            {name.slice(0, lowerName.indexOf(filter.toLowerCase()))}
            <span className="country-card__filter">
              {name.slice(
                lowerName.indexOf(filter.toLowerCase()),
                lowerName.indexOf(filter.toLowerCase()) + filter.length
              )}
            </span>
            {name.slice(
              lowerName.indexOf(filter.toLowerCase()) + filter.length,
              name.length
            )}
          </h4>
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
