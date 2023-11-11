
"use-client"
import React from 'react';
import './Fs2.css'; 
const Fs2 = () => {
    const topCountries = [
        'India', 'China', 'United States', 'australia', 'germany', 'Brazil',
        'united kingdom', 'canada', 'Russia', 'Mexico', 'Japan', 'Ethiopia',
      ];
  return (
    <>
     <div className="container99">
      <div className="top-logo">
        <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-salary-png-logo-vector-5.png" alt="Logo" />
      </div>
      <div className="border-box">
        <button className="button909">
        go to sale
          <span className="icon">&#x1F310;</span> 
       
        </button>
      </div>
      <div className="country-list">
        {topCountries.map((country, index) => (
          <div key={index} className="country">
            {country}
          </div>
        ))}
      </div>
    </div>

    </>

  );
};

export default Fs2;
