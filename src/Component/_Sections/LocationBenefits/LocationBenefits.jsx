import React from 'react'
import homeStyle from '@/app/home.module.css'
import Map from '@/Component/Map/Map'
import LocationBenefitsInfo from '@/Component/_Sections/LocationBenefitsInfo/LocationBenefitsInfo'
import LeftAnimation from '@/Component/LeftAnimation/LeftAnimation'

export default function LocationBenefits({ title, para }) {
    return (
        <section className={`${homeStyle.futureSurroundingSection2}`}>
            <LeftAnimation />
            <h1 className={`${homeStyle.mainTitle} ${homeStyle.futureSurroundingTitle}`}>{title}</h1>
            <p className={`${homeStyle.mainParagraph} ${homeStyle.futureSurroundingParagraph}`}>{para}</p>
            <div className={`${homeStyle.mapSection}`}>
                <div className={`${homeStyle.column7}`}>
                    <Map />
                </div>
                <div className={`${homeStyle.column5} ${homeStyle.locationInfoDiv}`}>
                    <LocationBenefitsInfo />
                </div>
            </div>
        </section>
    )
}
