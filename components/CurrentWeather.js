import React from "react";
import "../styles/styles.scss";

const CurrentWeather = ({
  temperature,
  description,
  city,
  feels_like,
  humidity,
  highTemp,
  lowTemp
}) => {
  return (
    <section className="hero is-light">
      <div className="hero-body">
        <h1 className="has-text-centered is-family-sans-serif has-text-weight-bold has-text-black is-size-2">
          Current Weather
        </h1>
        <div className="container">
          <h1 className="is-size-3 has-text-centered is-family-sans-serif has-text-weight-semibold has-text-black">
            {Math.round(temperature)}&deg;C
          </h1>
        </div>
        <h2 className="is-size-4 is-capitalized has-text-centered is-family-sans-serif has-text-weight-medium has-text-black">
          {description}
        </h2>
        <h3 className="is-family-sans-serif has-text-dark has-text-centered">
          {city}
        </h3>
        <h5 className="is-family-sans-serif has-text-centered">
          Feels like: {Math.round(feels_like)}&deg;C | Humidity: {humidity}
        </h5>
        <div className="has-text-centered">
          <span className="is-family-sans-serif">
            {Math.round(lowTemp)}&deg;
          </span>{" "}
          /{" "}
          <span className="is-family-sans-serif">
            {Math.round(highTemp)}&deg;C
          </span>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
