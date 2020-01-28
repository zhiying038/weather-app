import React from "react";
import "../styles/styles.scss";

const SearchCity = ({ changeHandler, submitHandler, activeCity }) => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="input"
          placeholder="Enter City"
          onChange={changeHandler}
          value={activeCity}
        />
        <button className="button" onClick={submitHandler}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchCity;
