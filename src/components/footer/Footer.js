import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='bg-dark py-5 px-3'>
      <div className="container py-3 text-white ">
        <div className="row">
          <div className="col-md-3">
            <h5 className='fw-bold'>Battersea Power Station</h5>
            <p className='text-secondary my-3'>18 Arches Lane, SW11 8AB, London</p>
            <p className='fw-bold'>+44 20 4503 9805</p>
          </div>
          <div className="col-md-3">
            <h5 className='fw-bold'>Hammersmith</h5>
            <p className='text-secondary my-3'>18 Arches Lane, SW11 8AB, London</p>
            <p className='fw-bold'>+44 20 4503 9805</p>
          </div>
          <div className="col-md-3">
            <h5 className='fw-bold'>Camden</h5>
            <p className='text-secondary my-3'>18 Arches Lane, SW11 8AB, London</p>
            <p className='fw-bold'>+44 20 4503 9805</p>
          </div>
          <div className="col-md-3 ">
            <h5 className='fw-bold my-2'>info@dnavr.co.uk</h5>

            <div className="icon-box d-flex justify-content-between my-2">
              <img src="https://www.dnavr.co.uk/img/footer/Facebook.svg" alt="" />
              <img src="https://www.dnavr.co.uk/img/footer/tiktok.svg" alt="" />
              <img src="https://www.dnavr.co.uk/img/footer/Instagram.svg" alt="" />

            </div>
            <div className="icon-box d-flex justify-content-between my-2">

              <img src="https://www.dnavr.co.uk/img/footer/Twitter.svg" alt="" />
              <img src="https://www.dnavr.co.uk/img/footer/Youtube.svg" alt="" />
              <img src="https://www.dnavr.co.uk/img/footer/LinkedIN.svg" alt="" />
            </div>

          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <p className='fw-bold'>games & experiences</p>
            <p className='fw-bold'>events</p>
            <p className='fw-bold'>contact</p>
            <p className='fw-bold'>faq</p>
            <p className='fw-bold'>vr academy</p>
          </div>
          <div className="col-md-3">
            <p className='fw-bold'>games & experiences</p>
            <p className='fw-bold'>events</p>
            <p className='fw-bold'>contact</p>
            <p className='fw-bold'>faq</p>
            <p className='fw-bold'>vr academy</p>
          </div>
          <div className="col-md-6">
            <p className='fw-bold'>Stay updated</p>
            <p>Sign up to our list for sweet deals and a chance to win a free session.</p>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Your E-mail" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn mx-1 rounded fw-bold p-2 signmeBtn" type="button" id="button-addon2">Sign me up</button>
            </div>
            <div className="text-secondary">
              <small>by signing up you agree to our Privacy policy</small>
            </div>

          </div>
        </div>
        <div className="row text-secondary pt-3">
          <div className="col-md-4">
            <div className="text-box d-flex justify-content-between">
              <small>© 2022 DNA VR</small>
              <small>Privacy policy</small>
              <small>Sitemap</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;