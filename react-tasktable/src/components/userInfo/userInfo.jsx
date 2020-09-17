import React from 'react';

const UserInfo = ({ elem }) => {
  console.log(elem);
  return (
    <div className="d-flex flex-column justify-content-end jumbotron p-3">
      <h3>
        Выбран пользователь <b>{`${elem.firstName} ${elem.lastName}`}</b>
      </h3>
      <h4>Описание:</h4>
      <textarea>{elem.description}</textarea>
      <p>
        Адрес проживания: <b>{elem.address.streetAddress}</b>
      </p>
      <p>
        Город: <b>{elem.address.city}</b>
      </p>
      <p>
        Провинция/штат: <b>{elem.address.state}</b>
      </p>
      <p>
        Индекс: <b>{elem.address.zip}</b>
      </p>
    </div>
  );
};

export default UserInfo;
