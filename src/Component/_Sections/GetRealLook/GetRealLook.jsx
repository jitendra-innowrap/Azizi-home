import React from 'react'
import homeStyle from '@/app/home.module.css'
import RealLookCarousel from '@/Component/RealLookCarousel'
import styles from './GetRealLook.module.css'

export default function GetRealLook() {
    return (
        <section className={`${homeStyle.realLookSection} ${styles.section}`}>
            <h1 className={`${homeStyle.mainTitle} ${homeStyle.realLookTitle}`}>GET A REAL LOOK</h1>
            <p className={`${homeStyle.mainParagraph} ${homeStyle.realLookParagraph}`}>Experience Dubai&#39;s latest water-inspired masterpiece - Azizi Venice, thoughtfully designed to take your breath away.</p>
            <div className={`${homeStyle.realLookVideoDiv}`}>
                <RealLookCarousel />
            </div>
        </section>
    )
}
