import React from 'react';

const TableBody = ({ data, viewUserInfo }) => {
  return (
    <tbody>
      {data.map((elem) => {
        return (
          <tr key={elem.id} onClick={() => viewUserInfo(elem)}>
            <th scope="row">{elem.id}</th>
            <td>{elem.firstName}</td>
            <td>{elem.lastName}</td>
            <td>{elem.email}</td>
            <td>{elem.phone}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;
