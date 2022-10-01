import React from 'react';
import BookingFooter from '../../components/booking-footer/BookingFooter';
import BookingHeader from '../../components/booking-header/BookingHeader';
import BookingCard from '../../components/BookingCard/BookingCard';

const Booking = () => {
  return (
    <div>
      <BookingHeader />
      <BookingCard />
      <BookingFooter />
    </div>
  );
};

export default Booking;