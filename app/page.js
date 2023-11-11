"use client"
import React, { useState, useEffect } from 'react';
import Navbar from './Navbr';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Pro from './Pro'
import Slide from './pages/Slide';
import Slide2 from './pages/Slide2';
import Sign from './pages/Sign'
export default function Home() {
  const [backgroundImages, setBackgroundImages] = useState([
    'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/Phase3/J23_P3B_PC_NTA_Hero_C4_LDT_2x._CB574339486_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img24/PC_Hero_3000x1200_diwali_gifting._CB574261663_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fresh/Nov/2/Set4_Fresh_GW_Hero_PC1x_NC._CB574112671_.jpg',
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change background every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [backgroundImages]);

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
  };

  return (
    <>
    <Navbar />
    
    <div className="home-page" style={backgroundImageStyle}>
    <div>
    <ProductCard />
    <Pro />
    <Slide />
    </div>
    <Slide2 />
<Sign />
    </div>






    <Footer />
    
    
    </>
      )
}
