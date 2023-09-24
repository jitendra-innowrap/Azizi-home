'use client'
import SectionsTitle from '@/Component/Molecules/SectionTitle/SectionTitle'
import React, { useEffect, useRef } from 'react';
import Styles from './ExquisiteDetails.module.css'
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function ExquisiteDetails({ para }) {

    const items = [
        <div key={1} className="item">
            <Image
                src="/Assets/Residence/images/Carousel2Image.png"
                alt="Image"
                width={100}
                height={100}
                className={Styles.ContainImage}
            />
        </div>,
        <div key={2} className="item">
            <Image
                src="/Assets/Residence/images/Carousel2Image.png"
                alt="Image"
                width={100}
                height={100}
                className={Styles.ContainImage}
            />
        </div>,
        <div key={3} className="item">
            <Image
                src="/Assets/Residence/images/Carousel2Image.png"
                alt="Image"
                width={100}
                height={100}
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
                                className={Styles.CarouselBtnIcon}
                            />
                        </button>
                        <button className={Styles.CarouselBtn} onClick={handleNextClick}>
                            <Image
                                src="/Assets/Residence/images/left-arrow-icon.png"
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
