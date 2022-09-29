import React from 'react';
import BookingFooter from '../../components/booking-footer/BookingFooter';
import BookingHeader from '../../components/booking-header/BookingHeader';

const Booking = () => {
  return (
    <div>
      <BookingHeader></BookingHeader>
      <h1>I am booking</h1>
      <BookingFooter></BookingFooter>
    </div>
  );
};

export default Booking;