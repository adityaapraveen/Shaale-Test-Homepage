import React from 'react';
import './Carousel.css'; // Import CSS file for styling
import SingerImage from '../icon/assets/media/singer3.jpg'; // Import the image

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        
        <div className="carousel-info">
          <h2>Singer Name</h2>
          <p>Description about the singer...</p>
          <p className="watch-now">Watch Now</p>
        </div>
        <div className="carousel-image">
          <img src={SingerImage} alt="Singer" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
