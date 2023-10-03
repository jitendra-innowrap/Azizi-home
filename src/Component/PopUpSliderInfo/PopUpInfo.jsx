'use client'
import Image from 'next/image';
import React from 'react';
import Styles from './PopUpInfo.module.css'
import translations from '@/translations/translations.json';
import useLanguage from '@/hooks/useLanguage';

export default function PopUpInfo({handleClose}) {
    const { language, changeLanguage } = useLanguage();
    return (
        <>
           <section className={`${Styles.infoSection}`}>
                <div className={`${Styles.closeBtnContainer}`}>
                    <button  className={`${Styles.closeBtn}`}
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
                <h2 className={`${Styles.title}`}>{translations[language].home.doorPopup1Title}</h2>
                <div className={`${Styles.descriptionDiv}`}>
                    <p className={`${Styles.description}`}>{translations[language].home.doorPopup1Para}</p>
                </div>
                <div className={`${Styles.infoDiv}`}>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Retail - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>{translations[language].home.doorPopup1V1}</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Restaurant - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>{translations[language].home.doorPopup1V2}</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Leisure - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>{translations[language].home.doorPopup1V3}</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <img
                            src="/Assets/Home/images/DesireOndoorstep/Luxury Boutiques - Carousel.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>{translations[language].home.doorPopup1V4}</p>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}
