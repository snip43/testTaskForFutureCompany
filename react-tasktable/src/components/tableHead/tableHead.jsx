import React from 'react';
import './tableHead.scss';

const TableHead = ({ getSort, sortDirection }) => {
  return (
    <thead className={`thead-dark sorting-block`}>
      <tr>
        <th className={sortDirection('id')} onClick={() => getSort('id')}>
          id
        </th>
        <th className={sortDirection('firstName')} onClick={() => getSort('firstName')}>
          First Name
        </th>
        <th className={sortDirection('lastName')} onClick={() => getSort('lastName')}>
          Last Name
        </th>
        <th className={sortDirection('email')} onClick={() => getSort('email')}>
          E-mail
        </th>
        <th className={sortDirection('phone')} onClick={() => getSort('phone')}>
          Phone
        </th>
      </tr>
    </thead>
  );
};
export default TableHead;

// {tableHead.map((elem, i) => (
//   <th
//     scope="col"
//     key={i}
//     className={
//       sort === 'asc'
//         ? 'sorting-block is-sortASC'
//         : sort === 'desc'
//         ? 'sorting-block is-sortDESC'
//         : ' sorting-block'
//     }
//     onClick={() => getSort(elem)}>
//     {elem}
//   </th>
// ))}
