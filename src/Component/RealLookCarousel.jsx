'use client'
import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import realLookCarouselStyle from '../app/realLookCarousel.module.css'

export default function RealLookCarousel()  {
  const items = [
    <div key={1} className="item">
       <video autoPlay muted loop id="bg-video"  className={realLookCarouselStyle.ContainImage}>
        <source src="/Assets/Home/videos/look-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>,
    <div key={2} className="item">
        <video autoPlay muted loop id="bg-video"  className={realLookCarouselStyle.ContainImage}>
        <source src="/Assets/Home/videos/look-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>,
    <div key={3} className="item">
        <video autoPlay muted loop id="bg-video"  className={realLookCarouselStyle.ContainImage}>
        <source src="/Assets/Home/videos/look-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>,
  ];

  const handlePrevClick = () => {
    carousel.slidePrev();
  };

  const handleNextClick = () => {
    carousel.slideNext();
  };
  let carousel;

  return (
    <>
      <div className={realLookCarouselStyle.CarouselBtnDiv}>
        <div className={realLookCarouselStyle.CarouselBtns}>
          <button className={realLookCarouselStyle.CarouselBtn} onClick={handlePrevClick}>
            <Image
              src="/Assets/Icons/right-arrow-icon.svg"
                alt="Image"
                width={100}
                height={100}
                className={realLookCarouselStyle.CarouselBtnIcon}
            />
          </button>
          <button className={realLookCarouselStyle.CarouselBtn} onClick={handleNextClick}>
            <Image
              src="/Assets/Icons/left-arrow-icon.svg"
                alt="Image"
                width={100}
                height={100}
                className={realLookCarouselStyle.CarouselBtnIcon}
            />
          </button>
        </div>
      </div>
      <div className="carousel-container">
        <AliceCarousel 
          disableButtonsControls={true} // Disable default buttons
          disableDotsControls={true} // Disable default dots
          //  paddingLeft={padding.left}
          //  paddingRight={padding.right}
          ref={(el) => (carousel = el)}
          mouseTracking={true}
          responsive={{
              0: { items: 1},
              768: { items: 1},
              1080: { items: 1},
            }}
          infinite={true}
          autoPlay={true}
          animationDuration={1000}
          items={items} autoPlayInterval={3000} />
      </div>
    </>
  );
}
