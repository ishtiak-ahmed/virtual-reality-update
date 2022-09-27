import React from "react";
import "./GamesAndExp.css";
import Tilt from "react-parallax-tilt";

import vrShow from "../../assets/images/vrShow.jpg";

const GamesAndExp = () => {
  return (
    <div className=" mainBox pb-5">

      <div className="container-lg px-0 pb-5">
        <h1 className="text-center text-white mainHeading">Games & Experience </h1>

        <div className="cardContainer d-flex flex-wrap justify-content-center pb-3">
        
          <Tilt>
            <div class="card">
              <div class="card_image">
                <img src="https://www.dnavr.co.uk/upload/uf/f94/f948e3e37f640af7daa9f76c6e69c236.png" />
              </div>
              <div class="card_title title-white">
                <span className="vrIcon">
                  <img src="https://www.dnavr.co.uk/img/vr_icon.svg" alt="" />1 - 10
                </span>
                <h2 className="title text-center">Title here</h2>
                <span className="price text-center"> from $5</span>
              </div>
              <p className="text-center text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, animi.
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div class="card">
              <div class="card_image">
                <img src="https://www.dnavr.co.uk/upload/uf/e25/e254ee237cce84c16b4cc621a75ca3ca.png" />
              </div>
              <div class="card_title title-white">
                <span className="vrIcon">
                  <img src="https://www.dnavr.co.uk/img/vr_icon.svg" alt="" />1 - 10
                </span>
                <h2 className="title text-center">Title here</h2>
                <span className="price text-center"> from $5</span>
              </div>
              <p className="text-center text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, animi.
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div class="card">
              <div class="card_image">
                <img src="https://www.dnavr.co.uk/upload/uf/828/82870a2eb164cfecdd8823659c931ddb.png" />
              </div>
              <div class="card_title title-white">
                <span className="vrIcon">
                  <img src="https://www.dnavr.co.uk/img/vr_icon.svg" alt="" />1 - 10
                </span>
                <h2 className="title text-center">Title here</h2>
                <span className="price text-center"> from $5</span>
              </div>
              <p className="text-center text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, animi.
              </p>
            </div>
          </Tilt>

          <Tilt>
            <div class="card">
              <div class="card_image">
                <img src="https://www.dnavr.co.uk/upload/uf/6ae/6aea8c4fa55b3ea0934938840bc78c05.jpg" />
              </div>
              <div class="card_title title-white">
                <span className="vrIcon">
                  <img src="https://www.dnavr.co.uk/img/vr_icon.svg" alt="" />1 - 10
                </span>
                <h2 className="title text-center">Title here</h2>
                <span className="price text-center"> from $5</span>
              </div>
              <p className="text-center text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, animi.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default GamesAndExp;
