'use client'
import React from 'react'
import homeStyle from '@/app/home.module.css'
import RealLookCarousel from '@/Component/RealLookCarousel'
import styles from './GetRealLook.module.css'
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';

export default function GetRealLook() {
    const { language, changeLanguage } = useLanguage();
    return (
        <section className={`${homeStyle.realLookSection} ${styles.section} overXhidden`}>
            <h1 className={`${homeStyle.mainTitle} ${homeStyle.realLookTitle}`}>{translations[language].home.getARealLook}</h1>
            <p className={`${homeStyle.mainParagraph} ${homeStyle.realLookParagraph}`}>{translations[language].home.getARealLookPara}</p>
            <div className={`${homeStyle.realLookVideoDiv}`}>
                <RealLookCarousel />
            </div>
        </section>
    )
}
