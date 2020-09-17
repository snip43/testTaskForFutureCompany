import React, { Component } from 'react';
import TableBody from '../tableBody';
import TableHead from '../tableHead';

// import Spinner from '../spinner/';

const Table = ({ getSort, data, sort, sortField }) => {
  const sortDirection = (field) => {
    return sortField === field
      ? sort === 'asc'
        ? 'sorting-block is-sortASC'
        : sort === 'desc'
        ? 'sorting-block is-sortDESC'
        : 'sorting-block'
      : 'sorting-block';
  };

  return (
    <table className={`table table-hover`}>
      <TableHead
        getSort={getSort}
        sort={sort}
        sortField={sortField}
        sortDirection={sortDirection}
      />
      <TableBody data={data} />
    </table>
  );
};

export default Table;

//  ({ data, pageSize }) => {
//   if (!data) {
//     return <Spinner />;
//   }
