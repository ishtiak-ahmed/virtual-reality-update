import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HowItWorks.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import vrShow2 from "../../assets/images/vrShow2.jpg";
import vrShow3 from "../../assets/images/vrShow3.jpg";
import vrShow4 from "../../assets/images/vrShow4.jpg";
import { Navigation, Pagination } from "swiper";

const HowItWorks = () => {
  return (
    <div className="container">
      <h1>How does It Work?</h1>
      <Swiper


        className="mySwiper"
        // install Swiper modules
        breakpoints={{
          320: {
            // width: 576,
            slidesPerView: 1,
          },
          468: {
            // width: 576,
            slidesPerView: 2,
          },
          576: {
            // width: 576,
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        // spaceBetween={20}
        slidesPerView={1}
      >
        <div className="all-slide d-flex flex-wrap">
        
          <SwiperSlide>
            <div className="content">
              <img className="content-image" src="https://www.dnavr.co.uk/upload/iblock/4ae/0vfpddjkbq843kz5bbfmju37yzzltik6.png" alt="" />
              <div className="content-details fadeIn-bottom">
                <h2 className="content-title text-white">4 Mind-blowing sessions</h2>
                <p className="content-text">
                  Try a range of games in the VR Arcade session, put your teamwork to test in a VR Escape Room or enjoy
                  unprecedented wireless immersion in Premium Free Roam.
                </p>
                <span className="GEbutton">Games and Experience</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="content">
              <img className="content-image" src={vrShow2} alt="" />
              <div className="content-details fadeIn-bottom">
                <h2 className="content-title text-white">4 Mind-blowing sessions</h2>
                <p className="content-text">
                  Try a range of games in the VR Arcade session, put your teamwork to test in a VR Escape Room or enjoy
                  unprecedented wireless immersion in Premium Free Roam.
                </p>
                <span className="GEbutton">Games and Experience</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="content">
              <img className="content-image" src={vrShow3} alt="" />
              <div className="content-details fadeIn-bottom">
                <h2 className="content-title text-white">4 Mind-blowing sessions</h2>
                <p className="content-text">
                  Try a range of games in the VR Arcade session, put your teamwork to test in a VR Escape Room or enjoy
                  unprecedented wireless immersion in Premium Free Roam.
                </p>
                <span className="GEbutton">Games and Experience</span>
              </div>
            </div>
          </SwiperSlide>
        </div>

        {/* Slide 2 */}




        {/* <SwiperSlide>
          <div className="content">
            <img className="content-image" src={vrShow4} alt="" />
            <div className="content-details fadeIn-bottom">
              <h2 className="content-title text-white">4 Mind-blowing sessions</h2>
              <p className="content-text">
                Try a range of games in the VR Arcade session, put your teamwork to test in a VR Escape Room or enjoy
                unprecedented wireless immersion in Premium Free Roam.
              </p>
              <span className="GEbutton">Games and Experience</span>
            </div>
          </div>
        </SwiperSlide> */}

      </Swiper>
    </div>
  );
};

export default HowItWorks;
