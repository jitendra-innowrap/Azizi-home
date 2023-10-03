'use client'
import Image from 'next/image';
import React from 'react';
import Styles from './PopUpInfo.module.css'
import translations from '@/translations/translations.json';
import useLanguage from '@/hooks/useLanguage';

export default function PopUpInfo3({ handleClose }) {
    const { language, changeLanguage } = useLanguage();
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
                <h2 className={`${Styles.title}`}>{translations[language].home.doorPopup3Title}</h2>
                <div className={`${Styles.descriptionDiv}`}>
                    <p className={`${Styles.description}`}>{translations[language].home.doorPopup3Para}</p>
                </div>
                <div className={`${Styles.infoDiv}`}>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/School - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>{translations[language].home.doorPopup3V1}</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Cable Car - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>{translations[language].home.doorPopup3V2}</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Hotel - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>{translations[language].home.doorPopup3V3}</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Hospital - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>{translations[language].home.doorPopup3V4}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
