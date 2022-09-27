import React from 'react';
import testimon from "../../images/testimonials.PNG";
import { Icon } from '@iconify/react';

const Testimonial = () => {
  return (

    <div className="container my-5">
      <div className="row">

        <img src={testimon} alt="" />
      </div>

      <div className="container my-5">
        <div className="row ">

          <div className="col-md-4 ">
            <div className="icon-box my-2">
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
            </div>
            <h4 className='fw-bold'>Great day</h4>
            <div className="img-name-box d-flex my-4">
              <img className='me-4 w-0' src="https://www.dnavr.co.uk/upload/resize_cache/iblock/154/52_52_1/154ea2726f372686a57856ea61891239.png" alt="" />
              <div>
                <p className="fw-bold mb-0">Martyn and Jay</p>
                <p className="mt-0">wrote a review 13 Mar</p>
              </div>
            </div>

            <p>Me and my 10 year son visited DNA VR we had a great time would highly recommend this place can't believe how fast the hour went we will definitely be returning. Big thanks to Matt for making us feel welcome we will be seeing you guys again soon </p>
            <p> Thanks again for great day</p>

            <p> Martyn and Jay</p>
            <p> <a href="">Read more</a> on Tripadvisor</p>


          </div>

          <div className="col-md-4 ">
            <div className="icon-box my-2">
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
            </div>
            <h4 className='fw-bold'>DNA -awesome trip!</h4>
            <div className="img-name-box d-flex my-4">
              <img className='me-4 w-0' src="https://www.dnavr.co.uk/upload/resize_cache/iblock/f74/52_52_1/f741450feb15a0e8ba7e972fcee41257.png" alt="" />
              <div>
                <p className="fw-bold mb-0">Jane</p>
                <p className="mt-0">wrote a review 13 Mar</p>
              </div>
            </div>

            <p>Me and my 10 year son visited DNA VR we had a great time would highly recommend this place can't believe how fast the hour went we will definitely be returning. Big thanks to Matt for making us feel welcome we will be seeing you guys again soon </p>
            <p> Thanks again for great day</p>

            <p> Martyn and Jay</p>
            <p> <a href="">Read more</a> on Tripadvisor</p>

          </div>

          <div className="col-md-4 ">
            <div className="icon-box my-2">
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
              <Icon icon="emojione:star" width="30" />
            </div>
            <h4 className='fw-bold'> They were buzzing!</h4>
            <div className="img-name-box d-flex my-4">
              <img className='me-4 w-0' src="https://www.dnavr.co.uk/upload/resize_cache/iblock/fd8/52_52_1/fd8faa3498545194378f87e0a5706088.png" alt="" />
              <div>
                <p className="fw-bold mb-0">duncant250</p>
                <p className="mt-0">wrote a review 13 Mar</p>
              </div>
            </div>

            <p>Me and my 10 year son visited DNA VR we had a great time would highly recommend this place can't believe how fast the hour went we will definitely be returning. Big thanks to Matt for making us feel welcome we will be seeing you guys again soon </p>
            <p> Thanks again for great day</p>

            <p> Martyn and Jay</p>
            <p> <a href="">Read more</a> on Tripadvisor</p>


          </div>


        </div>
      </div>

    </div>
  );
};

export default Testimonial;