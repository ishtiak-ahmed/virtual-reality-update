import React from 'react';
import './BookingFooter.css';

const BookingFooter = () => {

  return (
    <div className='bg-dark'>
      <div className="container text-white">
        <div className="row  pb-4">

          <div className="pt-4 pb-3 row">
            <div className="icon-box-footer d-flex col-md-6 ">
              <img src="https://www.dnavr.co.uk/img/footer/Facebook.svg" alt="" />
              <img src="https://www.dnavr.co.uk/img/footer/tiktok.svg" alt="" />
              <img src="https://www.dnavr.co.uk/img/footer/Instagram.svg" alt="" />
              <img src="https://www.dnavr.co.uk/img/footer/Twitter.svg" alt="" />
              <img src="https://www.dnavr.co.uk/img/footer/Youtube.svg" alt="" />
              <img src="https://www.dnavr.co.uk/img/footer/LinkedIN.svg" alt="" />
            </div>
            <div className='col-md-6 text-end'><p className='my-1'>© 2022 DNA VR</p></div>
          </div>
          <div className="col-md-2">
            <p>Phone: +44 (0) 20 7686 6090</p>
            <p>Camden</p>
          </div>
          <div className="col-md-2">
            <p>Phone: +44 (0) 20 7686 6090</p>
            <p>Camden</p>
          </div>
          <div className="col-md-2">
            <p>Phone: +44 (0) 20 7686 6090</p>
            <p>Camden</p>
          </div>
          <div className="col-md-2">
            <p>E-mail: </p>
            <p>info@dnavr.co.uk</p>
          </div>
          <div className="col-md-2">
            <p>Privacy </p>
            <p>Sitemap</p>
          </div>
          <div className="col-md-2">
            <p>Designed in reality by

            </p>
            <p>ITECH.group</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BookingFooter;