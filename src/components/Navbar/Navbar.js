import React from 'react';
import "./Navbar.css";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class="navbar position-relative">
        <div class="navbar-container container-lg">
          <input type="checkbox" name="" id=""/>
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2" ></span >
            <span className="line line3" ></span >
          </div>
           
            <img className='logo' src="https://www.dnavr.co.uk/img/logo.png" alt="" />
            
          <ul className="menu-items text-uppercase text-bold">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Events</a></li>
              <li><a href="#food">games</a></li>
              <li><a href="#food-menu">FAQ</a></li>
              <li><a href="#contact">Price</a></li>
            <li><Icon icon="fa-solid:search" width="28" /></li>
            <Link to='/booking'> <li><a className=' book-button' >Book now</a></li> </Link>
            
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Navbar;