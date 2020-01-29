import React from "react";
import "../styles/styles.scss";

const SearchCity = ({ changeHandler, submitHandler, activeCity }) => (
  <div className="field is-grouped centered-search" onSubmit={submitHandler}>
    <div className="control">
      <input
        className="input"
        placeholder="Enter City"
        onChange={changeHandler}
        value={activeCity}
      />
    </div>
    <div className="control">
      <a className="button is-dark" onClick={submitHandler}>
        Search
      </a>
    </div>
  </div>
);

export default SearchCity;
