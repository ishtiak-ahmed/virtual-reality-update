import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./BookingCard.css";
import LocationData from "../../assets/FakeData/locationCard.json";
import vrExperience from "../../assets/FakeData/vrExperience.json";
// import calData from "../../assets/FakeData/calenderData.json";

const BookingCard = () => {
  // all State
  const [cardData, setCardData] = useState([]);
  const [vrData, setVrData] = useState([]);
  const [calenderData, setCalenderData] = useState({});
  // showing New State
  const [isShown, setIsShown] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);
  const [bookingDetails, setBookingDetails] = useState([]);
  // console.log(bookingDetails);

  // State Select
  const clickStep1 = (id) => {
    // 👇️ toggle shown state
    setIsShown(true);
    // get data
    const step1 = cardData.find((item) => item.id === id);
    setBookingDetails({ ...bookingDetails, step1 });
  };

  const clickStep2 = (id) => {
    setShowStep2(true);
    console.log(id);
    const step2 = vrData.find((item) => item.id === id);
    setBookingDetails({ ...bookingDetails, step2 });
  };
  const clickStep3 = (id) => {
    setShowStep3(true);
    const quantity = 3;
    setBookingDetails({ ...bookingDetails, quantity });
  };

  const availableSchedule = {
    sat: [{ day: "Saturday", time: "1:40 PM", status: "Not Available", price: "E48/h" }],
    sun: [{ day: "Sunday", time: "1:40 PM", status: "Available", price: "E48/h" }],
    mon: [{ day: "Monday", time: "1:40 PM", status: "Not Available", price: "E48/h" }],
    tue: [{ day: "Tuesday", time: "1:40 PM", status: "Not Available", price: "E48/h" }],
    wed: [{ day: "Wednesday", time: "1:40 PM", status: "Not Available", price: "E48/h" }],
    thu: [{ day: "Thursday", time: "1:40 PM", status: "Not Available", price: "E48/h" }],
    fri: [{ day: "Saturday", time: "1:40 PM", status: "Not Available", price: "E48/h" }],
  };

  // DataLoading area
  const loadData = () => setCardData(LocationData);
  useEffect(() => {
    loadData();
  }, [cardData]);

  const vrDataLoad = () => setVrData(vrExperience);
  useEffect(() => {
    vrDataLoad();
  }, [vrData]);

  const calenderDataLoad = () => setCalenderData(Object.values(availableSchedule));
  useEffect(() => {
    calenderDataLoad();
  }, []);
  console.log(calenderData);

  return (
    <div className="row container">
      <div className="row my-5">
        <div className="col-md-9 col-lg-9 order-1 headerTitle">
          <h2>
            Book your experience <br /> or <span>buy a gift voucher</span>
          </h2>
        </div>
        <div className="col-md-3 col-lg-3 order-md-1">
          <span>
            <Icon icon="bi:arrow-left-circle" width="20" /> Return to Home
          </span>
        </div>
      </div>
      <div className="col-lg-9 col-md-9">
        {/* Area Title */}
        <div className="stepTitle">
          <h2>
            <span className="stepColor">Step 1 </span>
            Select Location
          </h2>
        </div>
        {/* Cards */}
        <div className="cards d-flex my-5">
          {cardData &&
            cardData?.map((data) => (
              <div
                onClick={() => {
                  clickStep1(data.id);
                }}
                className="bookingCard my-3 justify-content-center align-items-center"
                key={data.id}
              >
                <div className="VrLogo">
                  <img src="https://booking.dnavr.co.uk/frontend/dist/assets/img/location-card-pin.svg" alt="" />
                </div>
                <div className="details">
                  <h3>{data.title}</h3>
                </div>
                <p className="px-4">{data.units} </p>
                <p>
                  <span>Weekdays :</span> {data.weekdays}
                </p>
                <p>
                  <span>Weekend :</span> {data.weekends}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-9">
        {isShown && (
          <div className="SidebarArea">
            <div className="bookingDetails">
              <h3>Your Booking</h3>
              {Object.values(bookingDetails).map((bookingData, key) => (
                <div className="details" key={key}>
                  <h2>{bookingData?.title}</h2>
                  <p>{bookingData?.units}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {isShown && (
        <div className="row step2">
          <div className="col-lg-9 col-md-9">
            {/* Area Title */}
            <div className="stepTitle">
              <h2>
                <span className="stepColor">Step 2 </span>
                Select type of experience
              </h2>
            </div>
            {/* step 2 */}
            <div className="row py-4">
              <div className="py-3 experience-box d-flex flex-wrap justify-content-center">
                {/* VR ex card  */}
                {vrData &&
                  vrData.map((vr, key) => (
                    <div
                      className="single-box border p-2 "
                      key={key}
                      onClick={() => {
                        clickStep2(vr.id);
                        console.log(vr.id);
                      }}
                    >
                      <h5 className="fw-bold">{vr.title}</h5>
                      <p>{vr.details}</p>
                      <p>
                        {vr.price} <Icon className="mx-1" icon="icon-park-solid:vr-glasses" width="27" /> {vr.player}
                        <br /> <span className="fw-bold">Age: {vr.ageRestriction}</span>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* step 2  end*/}
        </div>
      )}
      {showStep2 && (
        <div className="row step3">
          <div className="col-lg-9 col-md-9">
            <div className="stepTitle pt-5">
              <h2>
                <span className="stepColor">Step 3 </span>
                Select headsets’ quantity
              </h2>
            </div>
            <div className="quantity py-5">
              <div
                onClick={() => {
                  clickStep3();
                }}
                className="qBox"
              >
                <span>
                  <Icon icon="bi:1-square-fill" width="25" className="my-3" />
                </span>
                <span>
                  <Icon icon="bi:2-square-fill" width="25" className="my-3" />
                </span>
                <span>
                  <Icon icon="bi:3-square-fill" width="25" className="my-3" />
                </span>
                <span>
                  <Icon icon="bi:4-square-fill" width="25" className="my-3" />
                </span>
                <span>
                  <Icon icon="bi:5-square-fill" width="25" className="my-3" />
                </span>
                <span>
                  <Icon icon="bi:6-square-fill" width="25" className="my-3" />
                </span>
                <span>
                  <Icon icon="bi:7-square-fill" width="25" className="my-3" />
                </span>
                <span>
                  <Icon icon="bi:8-square-fill" width="20" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* calender area step 4*/}
      {showStep3 && (
        <div className="row step4">
          <div className="stepTitle">
            <h2>
              <span className="stepColor">Step 4 </span>
              Select Date and slot(‑s)
            </h2>
          </div>
          <p>
            Book 2 consecutive weekday slots for the same experience <br /> to get a 20% discount on the second slot.
          </p>
          <div className="row">
            <div className="col-md-9 col-lg-9 position-relative">
              <select
                class="form-select date-select-form form-select fw-bold position-absolute"
                aria-label=".form-select  example"
              >
                <option selected value="1" className="">
                  Oct 02 - Oct 07
                </option>
                <option value="2">Sep 26- Oct 02</option>
                <option value="3">Sep 26- Oct 02</option>
                <option value="4">Sep 26- Oct 02</option>
                <option value="5">Sep 26- Oct 02</option>
                <option value="4">Sep 26- Oct 02</option>
                <option value="5">Sep 26- Oct 02</option>
              </select>
              <Icon className="position-absolute left-icon" icon="akar-icons:circle-chevron-left-fill" width="30" />
              <Icon className="position-absolute right-icon" icon="akar-icons:circle-chevron-right-fill" width="30" />

              <div className="calender-table table-responsive my-4 ">
                {Object.values(availableSchedule).map((date) =>
                  date.map((item, key) => (
                    <table class="table table-borderless ">
                      <tbody>
                        <tr className="first-row">
                          <td>Mon Sep 26</td>
                          <td>Mon Sep 26</td>
                          <td>Mon Sep 26</td>
                          <td>Mon Sep 26</td>
                          <td>Mon Sep 26</td>
                          <td>Mon Sep 26</td>
                          <td>Mon Sep 26</td>
                        </tr>
                        <tr>
                          <td>Not available</td>
                          <td>Not available</td>
                          <td>Not available</td>
                          <td>Not available</td>
                          <td>All Booked</td>
                          <td>Not available</td>
                          <td>Not available</td>
                        </tr>
                      </tbody>
                    </table>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
