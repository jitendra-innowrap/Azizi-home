'use client'
import React, { useEffect, useRef } from 'react';
import Styles from './IntroSection.module.css'
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CTAPopUp from '@/Component/Molecules/CTAPopUp/CTAPopUp';

export default function IntroSection({ btn1, btn2, btn3, para, images, showHide , padding}) { 

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
                <div className={Styles.buttons} style={{ paddingBottom: padding }}>
                    {btn1 && <CTAPopUp cta={btn1} fileName={'Azizi-Venice-Floorplans.pdf'} filePath={'/Brochure/Azizi-Venice-Floorplans.pdf'} /> }
                    {btn3 && <CTAPopUp cta={btn3} fileName={'Azizi-Venice-Typical-Unit-Plans.pdf'} filePath={'/Brochure/Azizi-Venice-Typical-Unit-Plans.pdf'} /> }
                    {btn2 && <CTAPopUp cta={btn2} fileName={'Brochure.pdf'} filePath={'/Brochure/Azizi-Venice-Brochure.pdf'} /> }

                </div>
                <div className={Styles.infoContainer}  style={{ display: showHide }}>
                    <div className={Styles.infoBox}>
                        <span className={Styles.infoTitle}>Apartment Type</span>
                        <span className={Styles.infoDesc}>Studios, 1, 2 & 3 Bedrooms</span>
                    </div>
                    {/* <div className={Styles.infoBox}>
                        <span className={Styles.infoTitle}>Starting size</span>
                        <span className={Styles.infoDesc}>356.07 SQ.FT</span>
                    </div> */}
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
                        // items={items} 
                        autoPlayInterval={3000} >
                            {images.map((image, index) => (
                                 <div key={index} className="item">
                                    <div className={Styles.ContainImage}>
                                        <img
                                            src={image}
                                            alt="Image"
                                            priority
                                            quality={100}
                                            className={Styles.Image}
                                        />
                                    </div>
                                 </div>
                             ))}
                    </AliceCarousel>
                </div>
            </div>
        </section>
    )
}
