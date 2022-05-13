import React, { useEffect, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";
function CountryCard({ props, filter, setChild }) {
  const { name, phone, code, capital, currency, emoji } = props;
  const [valid, setValid] = useState(false);
  useEffect(() => {
    let regExp = new RegExp(`^${filter}`, "i");
    if (regExp.test(name)) {
      setValid(true);
    } else {
      setValid(false);
    }
    return () => {};
  }, [filter, valid]);

  useEffect(() => {
    if (valid) setChild((prev) => prev + 1);
    else setChild((prev) => prev - 1);
    return () => {};
  }, [valid]);

  return name.includes(filter) && valid && filter ? (
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
            {name.slice(0, name.indexOf(filter))}
            <span className="country-card__filter">
              {name.slice(
                name.indexOf(filter),
                name.indexOf(filter) + filter.length
              )}
            </span>
            {name.slice(name.indexOf(filter) + filter.length, name.length)}
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
