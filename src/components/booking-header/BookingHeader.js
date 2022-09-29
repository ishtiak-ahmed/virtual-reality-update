import { Icon } from '@iconify/react';
import React from 'react';
import './BookingHeader.css';

const BookingHeader = () => {

  return (
    <div>
      <nav class="navbar ">
        <div class="navbar-container container">

          <img className='booking-logo' src="https://www.dnavr.co.uk/img/logo.png" alt="" />
          <p className='sign-in '> <Icon icon="ph:sign-in-bold" color="#9863ef" width="25" /> Sign in</p>

        </div>
      </nav>

    </div>
  );
};

export default BookingHeader;