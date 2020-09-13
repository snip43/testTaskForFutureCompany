import React from 'react';
import block from 'bem-cn';
import './tableHead.scss';
const cn = block('table');

const TableHead = ({ columns, getSort }) => {
  return (
    <thead className={`thead-dark`}>
      <tr>
        {columns.map((elem, i) => (
          <th
            scope="col"
            key={i}
            className={cn('sorting')
              .state({
                sortASC: elem.sort === 'asc',
                sortDESC: elem.sort === 'desc',
              })
              .mix('sorting-block text-nowrap')}
            onClick={() => getSort(i, elem.sort)}>
            {elem.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHead;
