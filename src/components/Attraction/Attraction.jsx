import React from "react";
import "./Attraction.css";
import TC20 from "../../assets/images/TC20.gif";
import TC22 from "../../assets/images/TC22.gif";

const Attraction = () => {
  return (
    <div className="container px-4  py-5 ">

      <div className="row attraction">
        <div className="col-md-6">
          <span className="AttractionHeader"> London's most unusual attraction.</span>
          <div className="textArea">
            <span className="textGradient">Our venues are now open!</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus magni repellendus voluptate
              dolorem, placeat commodi est voluptatum optio quaerat porro rem non exercitationem rerum. Numquam ut
              sapiente delectus molestiae.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="videoArea position-relative">
            <iframe className="w-100" src="https://www.youtube.com/embed/i4Zt3JZejbg" height="350" frameborder="0" />

            <img
              className="tc20 shadow-lg p-3 mb-5 bg-white rounded rounded-circle position-absolute "
              src={TC20}
              alt=""
            />
            <img
              className="tc22 shadow-lg p-3 bg-white rounded rounded-circle position-absolute mt-5"
              src={TC22}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attraction;
