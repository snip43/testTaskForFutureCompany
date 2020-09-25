import React from 'react';
import './addUser.scss';

const AddUser = ({ toggleOpenForm, btnAddUser }) => {
  return (
    <div className="container">
      <form
        className="d-flex flex-column w-25 p-4 mt-5 mx-auto border rounded adduser align-items-end"
        name="adduser">
        <div className="form-group d-flex justify-content-between">
          <label htmlFor="addId">
            ID:
            <input type="text" name="addId" id="addId" required readOnly disabled />
          </label>
        </div>
        <div className="form-group d-flex justify-content-between">
          <label htmlFor="addFirstName">
            FirstName: <input type="text" name="addFirstName" id="addFirstName" required />
          </label>
        </div>
        <div className="form-group d-flex justify-content-between">
          <label htmlFor="addLastName">
            LastName: <input type="text" name="addLastName" id="addLastName" required />
          </label>
        </div>
        <div className="form-group d-flex justify-content-between">
          <label htmlFor="addEmail">
            Email address: <input type="email" name="addEmail" id="addEmail" required />
          </label>
        </div>
        <div className="form-group d-flex justify-content-between">
          <label htmlFor="addPhone">
            Phone: <input type="text" name="addPhone" id="addPhone" required />
          </label>
        </div>
        <div className="btn-group mx-auto">
          <button
            className="btn btn-outline-success"
            onClick={() => {
              btnAddUser();
            }}>
            Добавить
          </button>
          <button className="btn btn-outline-danger" onClick={() => toggleOpenForm()}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
