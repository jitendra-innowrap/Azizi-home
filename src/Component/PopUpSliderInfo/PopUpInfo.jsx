'use client'
import Image from 'next/image';
import React from 'react';
import Styles from './PopUpInfo.module.css'

export default function PopUpInfo({handleClose}) {
    return (
        <>
           <section className={`${Styles.infoSection}`}>
                <div className={`${Styles.closeBtnContainer}`}>
                    <button  className={`${Styles.closeBtn}`}
                        onClick={handleClose}
                    >
                        <Image
                            src="/home/Close.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.closeBtnImage}
                        />
                    </button>
                </div>
                <h2 className={`${Styles.title}`}>Boulevard</h2>
                <div className={`${Styles.descriptionDiv}`}>
                    <p className={`${Styles.description}`}>Step into a vibrant new world along the kilometre-long Azizi Venice Boulevard. Overlooking the waterfront, this pedestrian-connected, climate-controlled environment is the perfect place to shop the retail boutiques, feast on the finest cuisine, and indulge in exceptional culture and entertainment. An all-year destination of leisure, entertainment and shopping – where you can live, work and play, your way.</p>
                </div>
                <div className={`${Styles.infoDiv}`}>
                    <div className={`${Styles.infoBox}`}>
                        <Image
                             src="/pop-up/info/info1.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>Retail</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <Image
                             src="/pop-up/info/info2.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>Restaurants & Cafes</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <Image
                             src="/pop-up/info/info3.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>Leisure & Entertainment</p>
                        </div>
                    </div>
                    <div className={`${Styles.infoBox}`}>
                        <Image
                             src="/pop-up/info/info4.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.infoImg}
                        />
                        <div className={`${Styles.infoTextDiv}`}>
                            <p className={`${Styles.infoText}`}>Luxury Boutiques</p>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}
