'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import realLookCarouselStyle from '../app/realLookCarousel.module.css'

export default function RealLookCarousel()  {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  useEffect(() => {
    // Ensure the video is muted (autoplay requires muting)
    videoRef1.current.muted = true;
    videoRef2.current.muted = true;
    videoRef3.current.muted = true;

    // Start the video
    videoRef1.current.play().catch(error => {
      // Handle any play errors, e.g., related to autoplay restrictions
      console.error('Video playback error:', error);
    });
    videoRef2.current.play().catch(error => {
      // Handle any play errors, e.g., related to autoplay restrictions
      console.error('Video playback error:', error);
    });
    videoRef3.current.play().catch(error => {
      // Handle any play errors, e.g., related to autoplay restrictions
      console.error('Video playback error:', error);
    });
  }, []);

  const items = [
    <div key={1} className="item">
      <video
        ref={videoRef1}
        autoPlay
        loop
        playsInline
        src="/Assets/Home/videos/look-1.mp4"
        type="video/mp4"
        id="bg-video"
        className={realLookCarouselStyle.ContainImage}
      >
            Your browser does not support the video tag.
        </video>
    </div>,
    <div key={2} className="item">
      <video
        ref={videoRef2}
        autoPlay
        loop
        playsInline
        src="/Assets/Home/videos/look-2.mp4"
        type="video/mp4"
        id="bg-video"
        className={realLookCarouselStyle.ContainImage}
      >
            Your browser does not support the video tag.
        </video>
    </div>,
    <div key={3} className="item">
      <video
        ref={videoRef3}
        autoPlay
        loop
        playsInline
        src="/Assets/Home/videos/look-3.mp4"
        type="video/mp4"
        id="bg-video"
        className={realLookCarouselStyle.ContainImage}
      >
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
