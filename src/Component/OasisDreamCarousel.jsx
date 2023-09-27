'use client'
import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import oasisDreamCarouselStyle from '../app/oasisDreamCarousel.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function OasisDreamCarousel() {
  const items = [
    <div key={1} className="item" >
      <div className={`${oasisDreamCarouselStyle.imageContainer}`}>
        <Image
          src="/Assets/Home/images/masterplan/Masterplan-1.png"
          alt="Image"
          width={600}
          height={600}
          priority
          quality={100}
          className={oasisDreamCarouselStyle.ContainImage}
        />
      </div>
    </div>,
    <div key={2} className="item">
      <div className={`${oasisDreamCarouselStyle.imageContainer}`}>
        <Image
          src="/Assets/Home/images/masterplan/Masterplan-2.png"
          alt="Image"
          width={600}
          height={600}
          priority
          quality={100}
          className={oasisDreamCarouselStyle.ContainImage}
        />
      </div>
    </div>,
    <div key={3} className="item">
      <div className={`${oasisDreamCarouselStyle.imageContainer}`}>
        <Image
          src="/Assets/Home/images/masterplan/Masterplan-3.png"
          alt="Image"
          width={600}
          height={600}
          priority
          quality={100}
          className={oasisDreamCarouselStyle.ContainImage}
        />
      </div>
    </div>
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
      <div className={oasisDreamCarouselStyle.CarouselBtnDiv}>
        <div className={oasisDreamCarouselStyle.CarouselBtns}>
          <button className={oasisDreamCarouselStyle.CarouselBtn} onClick={handlePrevClick}>
            <Image
              src="/Assets/Icons/right-arrow-icon.svg"
              alt="Image"
              width={100}
              height={100}
              className={oasisDreamCarouselStyle.CarouselBtnIcon}
            />
          </button>
          <button className={oasisDreamCarouselStyle.CarouselBtn} onClick={handleNextClick}>
            <Image
              src="/Assets/Icons/left-arrow-icon.svg"
              alt="Image"
              width={100}
              height={100}
              className={oasisDreamCarouselStyle.CarouselBtnIcon}
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
            0: { items: 1 },
            768: { items: 1 },
            1080: { items: 1 },
          }}
          infinite={true}
          // autoPlay={true}
          animationDuration={1000}
          items={items} autoPlayInterval={3000} />
      </div>
    </>
  );


}
