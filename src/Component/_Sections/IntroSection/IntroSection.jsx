'use client'
import React, { useEffect, useRef } from 'react';
import Styles from './IntroSection.module.css'
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function IntroSection({ para }) {
    const items = [
        <div key={1} className="item">
            <img
                src="/Assets/Residence/images/Carousel-Gallery-1.jpg"
                alt="Image"
                // width={100}
                // height={100}
                // quality={100}
                className={Styles.ContainImage}
            />
        </div>,
        <div key={2} className="item">
            <img
                src="/Assets/Residence/images/Carousel-Gallery-2.jpg"
                alt="Image"
                // width={100}
                // height={100}
                // quality={100}
                className={Styles.ContainImage}
            />
        </div>,
        <div key={3} className="item">
            <img
                src="/Assets/Residence/images/Carousel-Gallery-3.jpg"
                alt="Image"
                // width={100}
                // height={100}
                // quality={100}
                className={Styles.ContainImage}
            />
        </div>,
        <div key={4} className="item">
            <img
                src="/Assets/Residence/images/Carousel-Gallery-4.jpg"
                alt="Image"
                // width={100}
                // height={100}
                // quality={100}
                className={Styles.ContainImage}
            />
        </div>,
        <div key={5} className="item">
            <img
                src="/Assets/Residence/images/Carousel-Gallery-5.jpg"
                alt="Image"
                // width={100}
                // height={100}
                // quality={100}
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
        <section className={Styles.section}>
            <div className={Styles.container}>
                <p className={Styles.desc}>{para}</p>
                <div className={Styles.buttons}>
                    <button className={Styles.button}>
                        <Image
                            src="/Assets/Residence/images/Download.png"
                            alt="Image"
                            width={100}
                            height={100}
                            quality={100}
                            className={Styles.downloadIcon}
                        />
                        DOWNLOAD Floor plan
                    </button>
                    <button className={Styles.button}>
                        <Image
                            src="/Assets/Residence/images/Download.png"
                            alt="Image"
                            width={100}
                            height={100}
                            quality={100}
                            className={Styles.downloadIcon}
                        />
                        DOWNLOAD BROCHURE
                    </button>
                </div>
                <div className={Styles.infoContainer}>
                    <div className={Styles.infoBox}>
                        <span className={Styles.infoTitle}>Azizi VENICE</span>
                        <span className={Styles.infoDesc}>Community</span>
                    </div>
                    <div className={Styles.infoBox}>
                        <span className={Styles.infoTitle}>Residential</span>
                        <span className={Styles.infoDesc}>Type</span>
                    </div>
                </div>
            </div>
            <div className={Styles.CarouselContainer}>
                <div className={Styles.CarouselBtnDiv}>
                    <div className={Styles.CarouselBtns}>
                        <button className={Styles.CarouselBtn} onClick={handlePrevClick}>
                            <Image
                                src="/Assets/Icons/right-arrow-icon.svg"
                                alt="Image"
                                width={100}
                                height={100}
                                quality={100}
                                className={Styles.CarouselBtnIcon}
                            />
                        </button>
                        <button className={Styles.CarouselBtn} onClick={handleNextClick}>
                            <Image
                                src="/Assets/Icons/left-arrow-icon.svg"
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
                        autoPlay={true}
                        animationDuration={1000}
                        items={items} autoPlayInterval={3000} />
                </div>
            </div>
        </section>
    )
}
