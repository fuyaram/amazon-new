import React from 'react';
import './Sign.css'; // Import your CSS file for styling

const Sign = () => {
  return (
    <div className="border-box345">
      <h2 className="top-title">See personalized recommendations</h2>
      <div className="center-content">
        {/* Add your login button here */}
        <button className="login-button">Login</button>
      </div>
      <p className="bottom-text">New customer?<a id='fuck' href='#'>Start here.</a></p>
    </div>
  );
};

export default Sign;
