import React from 'react';
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"

const Slider = () => {

  const settings = {
    // dots: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    // autoplaySpeed: 4000,

  };

  return (
    <div className='overflow-hidden bg-light py-5'>
      <div className="container ">
        {/* <h2> Single Item</h2> */}
        <Sliders {...settings}>

          {/* 1st slider data */}

          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="mx-3">
                  <h1 className="slide-title">
                    Events. Parties. Collaborations.
                  </h1>
                  <div className="slider-text">
                    Looking for a corporate event, your guests will <b>actually</b> enjoy? Organising a Kid's Birthday Party or an event for your inner child?&nbsp;<br />
                    <br />
                    Look no further!<br />
                    <br />
                    We have organised numerous events of any complexity at our own venues and off-site.<br />
                    <br />
                    Click the link below, and we will transform your next event!
                  </div>

                  <div className='my-3'>
                    <a href="https://www.dnavr.co.uk/events/" className="button button--fill">
                      <span className="button__gradient" />
                      <span className="button__text">Learn More</span>
                    </a>
                  </div>
                </div>


              </div>

              <div className="col-md-6">
                <img className='w-100' src="https://www.dnavr.co.uk/upload/iblock/b73/57j5zn27dcbnessz2pxxc6sbztw4ptdz.jpg" alt="" />
              </div>
            </div>
          </div>

          {/* 2nd slider data */}

          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="mx-3">
                  <h1 className="slide-title">
                    VR Arcade + Bottomless Pizza from Gordon Ramsay Street Pizza
                  </h1>
                  <div className="slider-text">
                    Looking for a corporate event, your guests will <b>actually</b> enjoy? Organising a Kid's Birthday Party or an event for your inner child?&nbsp;<br />
                    <br />
                    Look no further!<br />
                    <br />
                    We have organised numerous events of any complexity at our own venues and off-site.<br />
                    <br />
                    Click the link below, and we will transform your next event!
                  </div>

                  <div className='my-3'>
                    <a href="https://www.dnavr.co.uk/events/" className="button button--fill">
                      <span className="button__gradient" />
                      <span className="button__text text-bold">Book now</span>
                    </a>
                  </div>
                </div>


              </div>

              <div className="col-md-6">
                <img className='w-100' src="https://www.dnavr.co.uk/upload/iblock/a4e/a2lwlr2jg5n1srtrlufxvi9f1jrbpx6m.jpg" alt="" />
              </div>
            </div>
          </div>


        </Sliders>

      </div>

    </div>
  );
};

export default Slider;