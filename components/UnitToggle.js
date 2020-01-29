import React from "react";
import "../styles/styles.scss";

const UnitToggle = ({ toggleUnit, unit }) => (
  <div className="control centered-toggle-unit">
    <label className="radio" htmlFor="celsius">
      <input
        className="is-radio"
        type="radio"
        id="celsius"
        name="celsius"
        value="metric"
        checked={unit === "metric"}
        onChange={toggleUnit}
      />
        Celsius
    </label>
    <label className="radio" htmlFor="fahrenheit">
      <input
        className="is-radio"
        type="radio"
        id="fahrenehit"
        name="fahrenheit"
        value="fahrenheit"
        checked={unit === "imperial"}
        onChange={toggleUnit}
      />
       Fahrenheit
    </label>
  </div>
);

export default UnitToggle;
