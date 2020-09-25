import React from 'react';
import './addUser.scss';

const AddUser = ({ toggleOpenForm }) => {
  return (
    <div className="container">
      <form
        className="d-flex flex-column w-25 p-4 mt-5 mx-auto border rounded adduser align-items-end"
        name="adduser">
        <div className="form-group d-flex justify-content-between">
          <label for="addId">ID: </label>
          <input type="text" name="addId" id="addId" />
        </div>
        <div className="form-group d-flex justify-content-between">
          <label for="addFirstName">
            FirstName: <input type="text" name="addFirstName" id="addFirstName" />
          </label>
        </div>
        <div className="form-group d-flex justify-content-between">
          <label for="addLastName">
            LastName: <input type="text" name="addLastName" id="addLastName" />
          </label>
        </div>
        <div className="form-group d-flex justify-content-between">
          <label for="addEmail">
            Email address: <input type="email" name="addEmail" id="addEmail" />
          </label>
        </div>
        <div className="form-group d-flex justify-content-between">
          <label for="addPhone">
            Phone: <input type="text" name="addPhone" id="addPhone" />
          </label>
        </div>
        <div className="btn-group mx-auto">
          <button className="btn btn-outline-success">Добавить</button>
          <button className="btn btn-outline-danger" onClick={() => toggleOpenForm()}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
