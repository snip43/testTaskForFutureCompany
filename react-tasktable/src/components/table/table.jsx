import React from 'react';
import TableBody from '../tableBody';
import TableHead from '../tableHead';
import Spinner from '../spinner/';

const Table = ({ data }) => {
  if (!data) {
    return <Spinner />;
  }
  return (
    <table className={`table table-hover`}>
      <TableHead />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
