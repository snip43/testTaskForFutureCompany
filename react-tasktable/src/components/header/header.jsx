import React from 'react';
import FilterPanel from '../filterPanel';

const Header = ({ onSearchChange, toggleOpenForm }) => {
  return (
    <div className="d-flex container justify-content-between align-items-center px-0">
      <FilterPanel onSearchChange={onSearchChange} className="col-sm-6" />
      <button type="button" className="btn btn-primary h-25 " onClick={() => toggleOpenForm()}>
        Добавить
      </button>
    </div>
  );
};
export default Header;
