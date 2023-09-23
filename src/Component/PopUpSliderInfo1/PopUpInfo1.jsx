'use client'
import Image from 'next/image';
import React from 'react';
import Styles from './PopUpInfo.module.css'

export default function PopUpInfo2({ handleClose }) {
    return (
        <>
            <section className={`${Styles.infoSection}`}>
                <div className={`${Styles.closeBtnContainer}`}>
                    <button className={`${Styles.closeBtn}`}
                        onClick={handleClose}
                    >
                        <Image
                            src="/Assets/Icons/Close.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.closeBtnImage}
                        />
                    </button>
                </div>
                <h2 className={`${Styles.title}`}>OPERA HOUSE</h2>
                <div className={`${Styles.descriptionDiv}`}>
                    <p className={`${Styles.description}`}>Envelop yourself in a harmonious symphony of sounds within the awe- inspiring Opera House, nestled in the very heart of Azizi Venice. This floating stage, gracefully adrift on the lagoon, offers a front-row seat to nature&#39;s dance, with fountains swaying in rhythmic choreography. It&#39;s a masterpiece of architectural composition, a bustling cultural overture, a pure work of art —a place where you can revel in the world&#39;s most electrifying performances, where every note, every movement, becomes a part of your own melodic journey.</p>
                </div>
                <div className={`${Styles.infoDiv}`}>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Arts Culture - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>Art & Culture</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Cultural District - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>2000-seat centre</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Perfomance - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>World-class performances</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Floating Stage - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>Floating Stage</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
