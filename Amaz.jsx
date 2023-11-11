import React from 'react'
import './Amaz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Amaz = () => {
  return (
    <>
    <div className="banner">
<div className="banner-content">
  <div className="panel">
  <FontAwesomeIcon icon={faBars} />
    <span className="material-symbols-outlined">menu</span>
    <a href="#">All</a>
  </div>

  <ul className="links">
    <li><a href="#">Today's Deals</a></li>
    <li><a href="#">Customer Service</a></li>
    <li><a href="#">Registry</a></li>
    <li><a href="#">Gift Cards</a></li>
    <li><a href="#">Sell</a></li>
    <li><a href="#">Today's Deals</a></li>
    <li><a href="#">Registry</a></li>
    <li><a href="#">Gift Cards</a></li>
    <li><a href="#">Sell</a></li>
    <li><a href="#">Gift Cards</a></li>
    <li><a href="#">Sell</a></li>
   
    <li><a href="#">Registry</a></li>
    <li><a href="#">Gift Cards</a></li>
    <li><a href="#">Sell</a></li>
  </ul>
  
  <div className="deals">
    
    <a href='#'>
    <img src='https://m.media-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/Phase3/J23_P3_SWM_LastDayTimer_V2._CB574341032_.jpg' alt='nk' className='ama'></img>
    </a>
  </div>
</div>
</div>
    </>

  )
}

export default Amaz
