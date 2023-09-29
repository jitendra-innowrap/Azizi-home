'use client'
import SectionsTitle from '@/Component/Molecules/SectionTitle/SectionTitle'
import React, { useEffect, useRef, useState } from 'react';
import Styles from './ExquisiteDetails.module.css'
import './Carousel.css'
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function ExquisiteDetails({ para }) {

    const [padding, setPadding] = useState({ left: 220, right: 220 });
    
    useEffect(() => {
        const handleResize = () => {
          // Calculate new padding values based on screen size
          const screenWidth = window.innerWidth;
          let newPaddingLeft = 200;
          let newPaddingRight = 200;
      
          if (screenWidth < 450) {
            newPaddingLeft = 20; // Adjust these values as needed for smaller screens
            newPaddingRight = 20;
          } else if (screenWidth < 520) {
            newPaddingLeft = 30;
            newPaddingRight = 30;
          } else if (screenWidth < 768) {
            newPaddingLeft = 50;
            newPaddingRight = 50;
          } else if (screenWidth < 1280) {
            newPaddingLeft = 100;
            newPaddingRight = 100;
          }else if (screenWidth < 1400) {
            newPaddingLeft = 150;
            newPaddingRight = 150;
          } else if (screenWidth < 1600) {
            newPaddingLeft = 180;
            newPaddingRight = 180;
          }
          setPadding({ left: newPaddingLeft, right: newPaddingRight });
        };
      
        // Initial call to set padding based on screen size
        handleResize();
      
        // Attach the event listener for window resize
        window.addEventListener('resize', handleResize);
      
        // Clean up the event listener on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const items = [
        <div key={1} className="item itemPadding">
            <div className={Styles.ContainImage}>
                <Image
                    src="/Assets/Residence/images/Carousel2Image.png"
                    alt="Image"
                    width={600}
                    height={600}
                    className={Styles.image}  
                />
            </div>
        </div>,
        <div key={2} className="item itemPadding">
            <div className={Styles.ContainImage}>
                <Image
                    src="/Assets/Residence/images/Carousel2Image.png"
                    alt="Image"
                    width={600}
                    height={600}
                    className={Styles.image}  
                />
            </div>
        </div>,
        <div key={3} className="item itemPadding">
            <div className={Styles.ContainImage}>
                <Image
                    src="/Assets/Residence/images/Carousel2Image.png"
                    alt="Image"
                    width={600}
                    height={600}
                    className={Styles.image}  
                />
            </div>
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
        <section className={Styles.section}>
            <SectionsTitle title={'Exquisite Details'} para={para} />
            <div className={Styles.CarouselContainer}>
                <div className={Styles.CarouselBtnDiv}>
                    <span className={Styles.Carouseltitle}>MARBLE FURNISHED</span>
                    <div className={Styles.CarouselBtns}>
                        <button className={Styles.CarouselBtn} onClick={handlePrevClick}>
                            <Image
                                src="/Assets/Residence/images/right-arrow-icon.png"
                                alt="Image"
                                width={100}
                                height={100}
                                quality={100}
                                className={Styles.CarouselBtnIcon}
                            />
                        </button>
                        <button className={Styles.CarouselBtn} onClick={handleNextClick}>
                            <Image
                                src="/Assets/Residence/images/left-arrow-icon.png"
                                alt="Image"
                                width={100}
                                height={100}
                                quality={100}
                                className={Styles.CarouselBtnIcon}
                            />
                        </button>
                    </div>
                </div>
                <div className="carousel-container">
                    <AliceCarousel
                        disableButtonsControls={true} // Disable default buttons
                        disableDotsControls={true} // Disable default dots
                         paddingLeft={padding.left}
                         paddingRight={padding.right}
                        ref={(el) => (carousel = el)}
                        mouseTracking={true}
                        responsive={{
                            0: { items: 1 },
                            768: { items: 1 },
                            1080: { items: 1 },
                        }}
                        infinite={true}
                        autoPlay={true}
                        animationDuration={1000}
                        items={items} autoPlayInterval={3000} />
                </div>
            </div>
        </section>
    )
}
