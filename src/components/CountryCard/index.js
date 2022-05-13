import React, { useEffect, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
import { separateSpanText } from "../../helpers";
function CountryCard({ props, filter }) {
  const { name, phone, code, capital, currency, emoji } = props;
  const regExp = new RegExp(`^${filter}`, "i");
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
            {separateSpanText({
              className: "country-card__filter",
              letters: filter,
              word: name,
            })}
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
