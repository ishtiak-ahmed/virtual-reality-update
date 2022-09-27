import React from "react";
import vr1 from "../../assets/images/vr-glass1.png";
import vr2 from "../../assets/images/vr-glass2.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container py-3">
      <div className="hero-section">
        <img className="vrBg w-100" src={vr2} alt="" />
        <img className="vrImg w-100" src={vr1} alt="" />
        <div className="vr-title text-center">London's First VR Arcade </div>
        <span className="bookBtn">Book Now</span>
      </div>
    </div>
  );
};

export default Header;
