import React from 'react';
import './Contact.css';

const Contact = () => {

  return (
    <div className='container my-5 py-5 px-4' >
      <div className="row">
        <div className="col-md-6">
          <h1 className='fw-bold'>Contact us</h1>
          <p>Please contact us with any questions or comments using the form below. We look forward to hearing from you.</p>

          <div className='my-5'>
            <div className="mb-3 ">
              <label htmlFor="exampleFormControlInput1" className="form-label">Your name</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">

              <textarea className="form-control my-5" placeholder='Your comment' id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
            <button className='btn btn-outline-dark rounded-pill border-2 fw-bold px-5 py-3 my-1'>Send</button>
          </div>

        </div>

        <div className="col-md-6 img-col-6">
          <img className='about-img' src="https://www.dnavr.co.uk/img/form_illustration.png" alt="" />
        </div>
      </div>

    </div>
  );
};

export default Contact;