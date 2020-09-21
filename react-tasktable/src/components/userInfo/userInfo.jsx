import React from 'react';

const UserInfo = ({ elem, defaultValue }) => {
  return (
    <div className="d-flex flex-column justify-content-end jumbotron p-3">
      <h6>
        Выбран пользователь <b>{`${elem.firstName} ${elem.lastName}`}</b>
      </h6>
      <h6>Описание:</h6>
      <textarea readOnly disabled value={defaultValue}>
        {elem.description}
      </textarea>
      <h6>
        Адрес проживания: <b>{elem.address.streetAddress}</b>
      </h6>
      <h6>
        Город: <b>{elem.address.city}</b>
      </h6>
      <h6>
        Провинция/штат: <b>{elem.address.state}</b>
      </h6>
      <h6>
        Индекс: <b>{elem.address.zip}</b>
      </h6>
    </div>
  );
};

export default UserInfo;
