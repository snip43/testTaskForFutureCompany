import React from 'react';

const FilterPanel = () => {
  return (
    <form>
      <input
        className="form-control form-control-sm my-3 "
        type="text"
        name="filterPanel"
        id="filterPanel"
        placeholder="Что ищем ?"></input>
    </form>
  );
};
export default FilterPanel;
