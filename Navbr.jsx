
import React from 'react';
import { FaSearch, FaTruck, FaShoppingCart, FaLanguage, FaSignLanguage } from 'react-icons/fa'; // Import icons
import './Navbar.css';
import Amaz from './Amaz';
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-logo">
          <a href="#"><img src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White.png" alt="logo" /></a>
        </div>
        <div className="address">
        
          <a href="#" className="deliver">Deliver to rajasthan</a>
          <div className="map-icon">
          <FaTruck className='dilivericon2' size={30} color="white" />
            <span className="material-symbols-outlined"></span>
            <a href="#" className="location">updated location</a>
          </div>
        </div>
        <div className="nav-search">
          <select className="select-search">
            <option id='all'>All</option>
            <option>All Categories</option>
            <option>Amazon Devices</option>
          </select>
          <input type="text" placeholder="Search Amazon" className="search-input" />
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
        <div className="langu">
          <img src='https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png' alt=',l' className='india'></img>
          <a href="#">
            <FaSignLanguage className="langu-icon" />
          </a>
          <p id="jk">hindi</p>
        </div>
        <div className="sign-in">
          <a href="#">
            <p>Hello, sign in</p>
            <span>Account &amp; Lists</span>
          </a>
        </div>
        <div className="returns">
          <a href="#">
            <p>Returns</p>
            <span>&amp; Orders</span>
          </a>
        </div>
        <div className="cart">
          <a href="#">
            <FaShoppingCart className="cart-icon" />
          </a>
          <p>Cart</p>
        </div>
      </nav>
      <Amaz />
    </header>

  );
}

export default Navbar;
