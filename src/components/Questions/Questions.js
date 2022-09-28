import React from 'react';
import "./Quiestions.css"

const Questions = () => {



  return (
    <div className='container my-5 px-4'>
      <h1 className="fw-bold">Frequently Asked Questions</h1>

      <div class="accordion my-5" id="accordionExample">

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button h5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Games Experience and Pricing
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Currently, we have 4 main types of experiences available at all 3 venues: VR Arcade, VR Escape room, Premium Free-Roaming experience and Ubisoft's VR Escape rooms.

              VR Arcade, VR Escape room and Ubisoft's VR Escape rooms are set in separate VR Pods. Each VR Pod is fitted with one VR Headset (1 per participant).

              Premium Free-Roaming experience is set in a separate Free-Roam zone where the whole team can walk around freely and play together.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed h5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              What is the different between type of experience?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Each player gets a headset and will be placed inside their own VR booth. You have an hour (or book 2 consecutive slots to have more) and can play as many games as you’d like. You will hear each other inside the game and can interact with them in multiplayer experiences.

              Max number of people in the same Virtual World: 10.
              Duration: 1 hour (but you can book 2 or more slots).
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed h5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Will i get help throughout the Experience?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Absolutely! Once you are at the venue, our friendly VR Masters will explain the controls and advise you on which game to choose and how to navigate. They will always be on hand if you get stuck or need help. The VR Masters will monitor your game progress, communicate with you through the headphones and come to your aid as soon as needed!
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed h5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Where can i try VR in London?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              With the growth of home VR and standalone headsets you can try VR nearly anywhere including the comfort of your home.

              However, for the best experience you need both high-end VR Equipment and loads of space. You also need your team to play together!

              All this comes together at DNA VR, a Virtual Reality Arcade with London venues in Camden, Hammersmith and Battersea Power Station.
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Questions;