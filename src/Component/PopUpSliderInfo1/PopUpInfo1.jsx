'use client'
import Image from 'next/image';
import React from 'react';
import Styles from './PopUpInfo.module.css'
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';

export default function PopUpInfo2({ handleClose }) {
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
                <h2 className={`${Styles.title}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.operaHouseTitle}</h2>
                <div className={`${Styles.descriptionDiv}`}>
                    <p className={`${Styles.description}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.operaHousePara}</p>
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
                            <p className={`${Styles.infoText}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.operaHouseInfo1}</p>
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
                            <p className={`${Styles.infoText}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.operaHouseInfo2}</p>
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
                            <p className={`${Styles.infoText}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.operaHouseInfo3}</p>
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
                            <p className={`${Styles.infoText}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.operaHouseInfo4}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
