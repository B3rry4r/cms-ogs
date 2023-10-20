import React, { useState, useEffect } from 'react';
import './UniqueCarousel.scss';
// import star from '../../Assets/Icons/star.svg'

const UniqueCarousel = ({ data, interval = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, interval]);

  return (
    <div className="unique-carousel">
      {data.map((item, index) => (
        <div
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <div className="c-overlay"></div>
          <div className="heading">
            <h1>Upcoming Events</h1>
          </div>
          <img src={item.image} alt={`Image ${index + 1}`} />
          <div className="gradient-overlay" style={{ background: item.gradientBackground }}>
            <h1>{item.heading}</h1>
            <p><i class="fa-regular fa-calendar-days"></i>  {item.text}</p>
            <p className='link'><i class="fa-solid fa-location-dot"></i>  Venerable Adelaja Hall CMS </p>
          </div>
          <div className="carousel-content">
          </div>
        </div>
      ))}
      <button className="prev-button" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="next-button" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default UniqueCarousel;
