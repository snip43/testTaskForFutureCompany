import React from 'react';

const Choice = ({ onChangeVolume }) => {
  return (
    <form
      className={'d-flex flex-column w-50 justify-content-center align-items-center mx-auto my-5'}>
      <h5 className={'mb-4'}>Выберете размер таблицы: </h5>
      <div>
        <button
          type="submit"
          className="btn btn-outline-dark btn-block"
          onClick={() => {
            onChangeVolume(32);
          }}>
          32 элемента
        </button>
        <button
          type="submit"
          className="btn btn-outline-dark btn-block"
          onClick={() => onChangeVolume(1000)}>
          1000 элементов
        </button>
      </div>
    </form>
  );
};

export default Choice;
