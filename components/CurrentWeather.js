import React from "react";
import "../styles/styles.scss";

const CurrentWeather = ({
  temperature,
  description,
  city,
  feels_like,
  humidity,
  highTemp,
  lowTemp,
  country,
  windspeed,
  unit
}) => {
  const metric = Math.round(temperature);
  const imperial = Math.round((temperature * 9/5) + 32);
  return (
    <section className="hero is-info is-bold">
      <div className="hero-body">
        <h1 className="has-text-centered is-family-sans-serif has-text-weight-bold has-text-black is-size-2">
          Current Weather
        </h1>
        <div className="container">
          <h1 className="is-size-3 has-text-centered is-family-sans-serif subtitle has-text-black">
            {unit === "metric" ? metric + "°C" : imperial + "°F"}
          </h1>
        </div>
        <h2 className="is-size-4 is-capitalized has-text-centered is-family-sans-serif has-text-weight-medium has-text-black">
          {description}
        </h2>
        <h3 className="is-family-sans-serif has-text-dark has-text-centered">
          {city}, {country}
        </h3>
        <h5 className="is-family-sans-serif has-text-centered">
          Feels like: {unit === "metric" ? Math.round(feels_like) + "°C" : Math.round((feels_like * 9/5) + 32) + "°F"} | Humidity: {humidity}%
        </h5>
        <div className="has-text-centered">
          <span className="is-family-sans-serif">
            {unit === "metric" ? Math.round(highTemp) + "°C" : Math.round((highTemp * 9/5) + 32) + "°F"}
          </span>{" "}
          /{" "}
          <span className="is-family-sans-serif">
          {unit === "metric" ? Math.round(lowTemp) + "°C" : Math.round((lowTemp * 9/5) + 32) + "°F"}
          </span>
        </div>
        <h5 className="is-family-sans-serif has-text-centered">
          Windspeed: {windspeed}
        </h5>
      </div>
    </section>
  );
};

export default CurrentWeather;
