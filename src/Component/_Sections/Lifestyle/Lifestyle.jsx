'use client'
import SectionsTitle from '@/Component/Molecules/SectionTitle/SectionTitle'
import React from 'react'
import Styles from './Lifestyle.module.css'
import Image from 'next/image';
import RightAnimation from '@/Component/RightAnimation/RightAnimation';
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';

export default function Lifestyle({ title, para, listItem , image, imageTitle}) {
    console.log(listItem)
    const { language, changeLanguage } = useLanguage();
    return (
        <section className={Styles.section}>
            <RightAnimation />
            <SectionsTitle title={title} para={para} />
            <div className={Styles.imageSection}>
                <div className={Styles.imageContainer} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                    <img
                        src={image}
                        alt="Image"
                        // width={100}
                        // height={100}
                        // quality={100}
                        priority
                        quality={100}
                        className={Styles.image}
                    />
                    <div className={Styles.overlay}></div>
                    <span className={Styles.title}>{imageTitle}</span>
                </div>
            </div>
            <div className={Styles.textSection}>
                {listItem.map((title, index) => (
                    <div className={Styles.box} key={index} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                        <Image
                            src="/Assets/Residence/images/square.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.square}
                        />
                        <span className={Styles.boxTitle}>{title}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
