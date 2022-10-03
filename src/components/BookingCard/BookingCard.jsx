import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./BookingCard.css";
import LocationData from "../../assets/FakeData/locationCard.json";
import vrExperience from "../../assets/FakeData/vrExperience.json";
// import calData from "../../assets/FakeData/calenderData.json";
const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const BookingCard = () => {
  // all State
  const [cardData, setCardData] = useState([]);
  const [vrData, setVrData] = useState([]);
  const [calenderData, setCalenderData] = useState({});
  const [headsetQty, setHeadsetQty] = useState(0);
  // showing New State
  const [isShown, setIsShown] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);
  const [showStep4, setShowStep4] = useState(false);
  const [showStep5, setShowStep5] = useState(false);
  const [bookingDetails, setBookingDetails] = useState([]);
  console.log(bookingDetails);

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

  const endTime = Number(bookingDetails?.time?.charAt(0)) + 1;

  // pick date for schedule
  const scheduleDay = (date) => {
    setShowStep4(true);
    console.log(date);
    // const step4 = availableSchedule.find((day) => day.id === id);
    setBookingDetails({ ...bookingDetails, date });
  };
  const scheduleTime = (time) => {
    setShowStep5(true);
    // const step4 = availableSchedule.find((day) => day.id === id);
    setBookingDetails({ ...bookingDetails, time });
  };

  // Headset Quantity
  const incQuantity = () => {
    if (headsetQty < 15) {
      setHeadsetQty(Number(headsetQty) + 1);
    }
  };
  const decQuantity = () => {
    if (headsetQty > 0) {
      setHeadsetQty(Number(headsetQty) - 1);
    }
  };
  const HeadsetQtyChange = (e) => {
    setHeadsetQty(e.target.value);
  };

  const clickStep3 = (id) => {
    setShowStep3(true);
    setBookingDetails({ ...bookingDetails, headsetQty });
  };

  const startDate = 4;
  const startMonth = ` ${new Date().toLocaleString("en-US", { month: "short" })},`;
  const availableSchedule = {
    Sat: [
      { time: "1:40 PM ", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
    ],
    Sun: [
      { time: "1:40 PM", status: "Not Available", price: "€50/h" },
      { time: "3:00 PM", status: " Available", price: "€50/h" },
      { time: "4:00 PM", status: "Not Available", price: "€50/h" },
      { time: "3:00 PM", status: " Available", price: "€50/h" },
      { time: "3:00 PM", status: "Not Available", price: "€50/h" },
    ],
    Mon: [
      { time: "1:40 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
    ],
    Tue: [
      { time: "1:40 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
    ],
    Wed: [
      { time: "1:40 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
    ],
    Thu: [
      { time: "1:40 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
    ],
    Fri: [
      { time: "1:40 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "4:00 PM", status: "Not Available", price: "€48/h" },
      { time: "3:00 PM", status: " Available", price: "€48/h" },
      { time: "3:00 PM", status: "Not Available", price: "€48/h" },
    ],
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

  // const calenderDataLoad = () => setCalenderData(Object.values(availableSchedule));
  // useEffect(() => {
  //   calenderDataLoad();
  // }, []);
  const calenderDataLoad = () => setCalenderData(Object.values(calenderData));
  useEffect(() => {
    calenderDataLoad();
  }, []);

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
                <>
                  <div className="details" key={key}>
                    <h2>{bookingData?.title}</h2>
                    <p>{bookingData?.units}</p>
                  </div>
                </>
              ))}
              {showStep3 && (
                <>
                  <div className="">
                    <p>Headset: {headsetQty}</p>
                  </div>
                  <div className="">
                    <span>{bookingDetails?.date}</span>
                    <p>
                      {bookingDetails?.time?.slice(0, 7)} {"-"} {`${endTime} ${bookingDetails?.time?.slice(1, 7)}`}
                    </p>
                  </div>
                  <div className="pricingArea d-flex justify-content-between">
                    <p>Sub Total</p>
                    <span>{bookingDetails?.time?.slice(10, 14)}</span>
                  </div>
                  <div className="pricingArea d-flex justify-content-between">
                    <p>Total</p>
                    <span>{bookingDetails?.time?.slice(10, 14)}</span>
                  </div>
                  {showStep5 && (
                    <div className="processToPay">
                      <button className="bookBtn">Process To Payment</button>
                    </div>
                  )}
                </>
              )}
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
            <div
              onClick={clickStep3}
              className="headset-quantity py-4 d-flex justify-content-center align-items-center"
            >
              <Icon className="" icon="akar-icons:circle-minus" color="" width="60" onClick={decQuantity} />
              <div className="count-box mx-3 d-flex justify-content-center align-items-center ">
                <h4 className="text-white" onChange={HeadsetQtyChange}>
                  {headsetQty}
                </h4>
              </div>
              <Icon onClick={incQuantity} icon="akar-icons:circle-plus-fill" color="#261deb" width="60" />
            </div>
          </div>
        </div>
      )}
      {/* calender area step 4*/}
      {showStep3 && (
        // Step 3 additional
        <>
          <div className="col-lg-9 col-md-9 col-sm-3">
            <div className="all-room-box d-flex flex-wrap justify-content-center">
              <div className="single-room-box">
                <p>I will choose later</p>
              </div>

              <div className="single-room-box">
                <img
                  src="https://booking.dnavr.co.uk/upload/resize_cache/games/8d8/168_168_2/8d8c33b9429ccf571bf52271125ec864.jpg"
                  alt=""
                />
                <p>Mission Sigma</p>
              </div>
              <div className="single-room-box">
                <img
                  src="https://booking.dnavr.co.uk/upload/resize_cache/games/684/168_168_2/684a07a5d832e12a6711177666f4f4ed.jpg"
                  alt=""
                />
                <p>Cyberpunk</p>
              </div>
              <div className="single-room-box">
                <img
                  src="https://booking.dnavr.co.uk/upload/resize_cache/games/d67/168_168_2/d67b4ebf475e8e99c705d1e239b4bc3d.jpg"
                  alt=""
                />
                <p>Sanctum</p>
              </div>
              <div className="single-room-box">
                <img
                  src="https://booking.dnavr.co.uk/upload/resize_cache/games/d24/168_168_2/d244edff627d9781765f92657f3c6447.jpg"
                  alt=""
                />
                <p>Mission Sigma</p>
              </div>
              <div className="single-room-box">
                <img
                  src="https://booking.dnavr.co.uk/upload/resize_cache/games/8d8/168_168_2/8d8c33b9429ccf571bf52271125ec864.jpg"
                  alt=""
                />
                <p>Mission Sigma</p>
              </div>
              <div className="single-room-box">
                <img
                  src="https://booking.dnavr.co.uk/upload/resize_cache/games/684/168_168_2/684a07a5d832e12a6711177666f4f4ed.jpg"
                  alt=""
                />
                <p>Cyberpunk</p>
              </div>
              <div className="single-room-box">
                <img
                  src="https://booking.dnavr.co.uk/upload/resize_cache/games/d67/168_168_2/d67b4ebf475e8e99c705d1e239b4bc3d.jpg"
                  alt=""
                />
                <p>Sanctum</p>
              </div>
              <div className="single-room-box">
                <img
                  src="https://booking.dnavr.co.uk/upload/resize_cache/games/d24/168_168_2/d244edff627d9781765f92657f3c6447.jpg"
                  alt=""
                />
                <p>Mission Sigma</p>
              </div>
            </div>
          </div>
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
                  class="form-select date-select-form form-select fw-bold position-relative my-1"
                  aria-label=".form-select  example"
                >
                  <option selected value="1" className="">
                    Oct 04 - Oct 10
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
                  <table class="table table-borderless border border-dark rounded p-3">
                    <thead>
                      <tr className="align-items-center justify-content-center">
                        {Object.keys(availableSchedule).map((day, key) => (
                          <th
                            scope="col"
                            onClick={() => {
                              scheduleDay(`${day}, ${startMonth} ${startDate + key}`);
                            }}
                          >
                            {`${day}, ${startMonth} ${startDate + key}`}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {test.map((index) => (
                        <tr>
                          {Object.values(availableSchedule).map((items) => (
                            <td>
                              <div
                                className="active"
                                onClick={() => {
                                  scheduleTime(`${items[index]?.time} , ${items[index].price}`);
                                }}
                              >
                                <p>{items[index]?.time}</p>
                                <p>{items[index]?.price}</p>
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showStep5 && (
        <div className="col-md-9">
          <div className="row py-5">
            <div className="stepTitle">
              <h2>
                <span className="stepColor">Step 5 </span>
                Personal information
              </h2>
            </div>
            <div className="col-md-6 p-5  border">
              <h4>Login with email</h4>

              <form className="row g-3 needs-validation" noValidate>
                <div className="">
                  <label htmlFor="validationCustomUserEmail" className="form-label">
                    E-mail
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="email"
                      className="form-control"
                      id="validationCustomUserEmail"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div className="invalid-feedback">Please Enter your E-mail.</div>
                  </div>
                </div>

                <div className="">
                  <label htmlFor="validationCustom01" className="form-label">
                    First name
                  </label>
                  <input type="text" className="form-control" id="validationCustom01" required />
                  <div className="invalid-feedback">Please write your first name.</div>
                </div>
                <div className="">
                  <label htmlFor="validationCustom02" className="form-label">
                    Last name
                  </label>
                  <input type="text" className="form-control" id="validationCustom02" required />
                  <div className="invalid-feedback">Please write your last name.</div>
                </div>

                <div className="">
                  <label htmlFor="validationCustom03" className="form-label">
                    Your Phone Number
                  </label>
                  <input type="number" className="form-control " id="validationCustom03" required />
                  <div className="invalid-feedback">Please write your phone number.</div>
                </div>
              </form>
            </div>

            <div className="col-md-6 p-5 text-center">
              <h4>Social login</h4>
              <Icon className="m-3 p-1 border rounded-circle" icon="flat-color-icons:google" height="40" />
            </div>
          </div>
        </div>
      )}
      {showStep5 && (
        <div className="col-lg-9 col-md-9">
          <div className="stepTitle py-2 my-5">
            <h2>
              <span className="stepColor">Step 6 </span>
              Personal information
            </h2>
            <h4>Gift Vouchers and Promo codes</h4>
            <input type="text" placeholder="Gift Vouchers and Promo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
