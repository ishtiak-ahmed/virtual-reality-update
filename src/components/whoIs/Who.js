import React from 'react';
import "./Who.css";
import virtulImg from '../../images/virtual-img (2).PNG';

const Who = () => {
  return (
    <div className='container my-5'>

      <h1 className='fw-bold text-center py-4'>Who is it for?</h1>
      <div className="row">
        <div className="col-md-4 text-justify">
          <h4 className='fw-bold py-3'>Friends and Family Fun</h4>
          <p>
            Date night or Family get-together, there is an experience for everyone!
          </p>
          <div className="d-flex justify-content-between  ">
            <button className='btn btn-outline-dark rounded-pill border-2 fw-bold px-4 my-1'>Book now</button>
            <p className='fw-bold'>get a gift <br /> voucher</p>
          </div>
        </div>
        <div className="col-md-4 text-justify">
          <h4 className='fw-bold py-3'>Birthday Parties</h4>
          <p>
            Date night or Family get-together, there is an experience for everyone!
          </p>
          <div className="d-flex justify-content-between  ">
            <button className='btn btn-outline-dark rounded-pill border-2 fw-bold px-4 my-1'>Book now</button>
            <p className='fw-bold'>get a gift <br /> voucher</p>
          </div>
        </div>

        <div className="col-md-4 text-justify">
          <h4 className='fw-bold py-3'>Corporate events</h4>
          <p>
            Date night or Family get-together, there is an experience for everyone!
          </p>
          <div className="d-flex justify-content-between  ">
            <button className='btn btn-outline-dark rounded-pill border-2 fw-bold px-4 my-1'>Book now</button>

          </div>
        </div>
      </div>

      {/* virtuality image section */}

      <div className="row">
        <img src={virtulImg} alt="virtul Image" />


      </div>

    </div>
  );
};

export default Who;