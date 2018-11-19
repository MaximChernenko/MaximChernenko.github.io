import React from "react";
import "../css/filter.css";

const Filter = ({ value, onFilter }) => (
  <div className="filter">
    <label className="filter__label" htmlFor="filter-input">Filter: </label>
    <input name="filter" className="filter__input" value={value} onChange={onFilter} id="filter-input"/>
  </div>
);

export default Filter;
