import React from 'react';
import img_bg from '../../img/spinner.svg';

const Spinner = () => {
  return (
    <div className={`spinner d-flex justify-content-center`}>
      <img src={img_bg} alt="" />
    </div>
  );
};

export default Spinner;
