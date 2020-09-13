import React from 'react';

const FilterPanel = ({ handleFilter, filterStr, data }) => {
  return (
    <form>
      <input
        className="form-control form-control-sm my-3 "
        type="text"
        name="filterPanel"
        value={filterStr}
        id="filterPanel"
        placeholder="Что ищем ?"
        onChange={(e) => handleFilter(e.target.value, data)}></input>
    </form>
  );
};
export default FilterPanel;
