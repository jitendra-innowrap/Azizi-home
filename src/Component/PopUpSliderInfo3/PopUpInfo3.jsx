'use client'
import Image from 'next/image';
import React from 'react';
import Styles from './PopUpInfo.module.css'

export default function PopUpInfo3({ handleClose }) {
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
                <h2 className={`${Styles.title}`}>EVERYDAY amenities</h2>
                <div className={`${Styles.descriptionDiv}`}>
                    <p className={`${Styles.description}`}>From the infinity pool that gazes upon the glistening lagoon to serene beachfront access. Azizi Venice is a place where every wish is embraced. Enroll your children with ease at the International School and tend to your healthcare needs at the Community Hospital. Live in close proximity to the Friday Mosque and enjoy the high life at our Five Star Hotels - Dubai&#39;s upcoming legacy invites you to relish it all.</p>
                </div>
                <div className={`${Styles.infoDiv}`}>
                    <div className={`${Styles.infoBox}`}>
                        <Image
                            src="/Assets/Home/images/DesireOndoorstep/School - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>International School</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <Image
                            src="/Assets/Home/images/DesireOndoorstep/Cable Car - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>Cable car </p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <Image
                            src="/Assets/Home/images/DesireOndoorstep/Hotel - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>Five-Star Family Hotel</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <Image
                            src="/Assets/Home/images/DesireOndoorstep/Hospital - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>Private Hospital</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
