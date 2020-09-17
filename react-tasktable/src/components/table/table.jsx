import React from 'react';
import TableBody from '../tableBody';
import TableHead from '../tableHead';
import UserInfo from '../userInfo/userInfo';

// import Spinner from '../spinner/';

const Table = ({ getSort, data, sort, sortColumn, userSelected, viewUserInfo }) => {
  const sortDirection = (field) => {
    return sortColumn === field
      ? sort === 'asc'
        ? 'sorting-block is-sortASC'
        : sort === 'desc'
        ? 'sorting-block is-sortDESC'
        : 'sorting-block'
      : 'sorting-block';
  };

  return (
    <>
      <table className={`table table-hover`}>
        <TableHead
          getSort={getSort}
          sort={sort}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
        />
        <TableBody data={data} viewUserInfo={viewUserInfo} />
      </table>
      {userSelected ? <UserInfo elem={userSelected} /> : null}
    </>
  );
};

export default Table;

//  ({ data, pageSize }) => {
//   if (!data) {
//     return <Spinner />;
//   }
/* <UserInfo data={data} /> */
