import React from 'react';

const TableHead = () => {
  return (
    <thead className={`thead-dark`}>
      <tr>
        <th scope="col">id</th>
        <th scope="col">firstName</th>
        <th scope="col">lastName</th>
        <th scope="col">email</th>
        <th scope="col">phone</th>
      </tr>
    </thead>
  );
};
export default TableHead;
