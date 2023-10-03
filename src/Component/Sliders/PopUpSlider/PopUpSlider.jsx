'use client'
import Image from 'next/image';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Styles from './PopUpSlider.module.css'

export default function PopUpSlider() {
    const items = [
        <div key={1} className="item">
            <img
                src="/Assets/Home/images/DesireOndoorstep/Retail - Carousel.png"
                alt="Image"
                width={100}
                height={100}
                quality={100}
                priority
                className={Styles.ContainImage}
            />
        </div>,
        <div key={2} className="item">
            <img
                src="/Assets/Home/images/DesireOndoorstep/Restaurant - Carousel.png"
                alt="Image"
                width={100}
                height={100}
                priority
                className={Styles.ContainImage}
            />
        </div>,
        <div key={3} className="item">
            <img
                src="/Assets/Home/images/DesireOndoorstep/Leisure - Carousel.png"
                alt="Image"
                width={100}
                height={100}
                priority
                className={Styles.ContainImage}
            />
        </div>,
        <div key={4} className="item">
            <img
                src="/Assets/Home/images/DesireOndoorstep/Luxury Boutiques - Carousel.png"
            alt="Image"
            width={100}
            height={100}
            priority
            className={Styles.ContainImage}
        />
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
        <div className={Styles.CarouselBtnDiv}>
            <div className={Styles.CarouselBtns}>
            <button className={Styles.CarouselBtn} onClick={handlePrevClick}>
                <Image
                            src="/Assets/Icons/right-arrow-icon.svg"
                            alt="Image"
                    width={100}
                    height={100}
                    className={Styles.CarouselBtnIcon}
                />
            </button>
            <button className={Styles.CarouselBtn} onClick={handleNextClick}>
                <Image
                            src="/Assets/Icons/left-arrow-icon.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={Styles.CarouselBtnIcon}
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
                    // autoPlay={true}
            animationDuration={1000}
            items={items} autoPlayInterval={3000} />
        </div>
        </>
    )
}
