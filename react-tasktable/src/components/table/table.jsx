import React from 'react';
import TableBody from '../tableBody';
import TableHead from '../tableHead';
import UserInfo from '../userInfo/userInfo';

const Table = ({ getSort, data, sort, sortField, userSelected, viewUserInfo, viewUsers }) => {
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
    <>
      <table className={`table table-hover`}>
        <TableHead getSort={getSort} sortDirection={sortDirection} />
        <TableBody data={data} viewUserInfo={viewUserInfo} />
      </table>
      {userSelected ? <UserInfo elem={userSelected} /> : null}
    </>
  );
};

export default Table;
