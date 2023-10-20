import React, { useEffect, useState } from 'react';
import './Marquee.scss';
import Marquee from "react-fast-marquee"

const CarouselMarquee = ({ imageUrls, style, rotationAngle = 0 }) => {

  return (
    <div className="carousel-marquee">
      <Marquee speed={20} pauseOnHover={true}>
        {imageUrls?.map((imageUrl, index) => (
          <div className='marquee' >
           <img src={imageUrl} alt={`image ${index}`} style={{ transform: `translateY(${index % 2 === 0 ? rotationAngle : `-${rotationAngle}`})`, ...style}} />
            <div className={`border-line`} style={{ transform: `translateY(${index % 2 === 0 ? rotationAngle : `-${rotationAngle}`})`, ...style }} />
            <div className="description" style={{ transform: `translateY(${index % 2 === 0 ? rotationAngle : `-${rotationAngle}`})`, ...style }} >
              <h3>Mr. Lorem, ipsum.</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>More</span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CarouselMarquee;
