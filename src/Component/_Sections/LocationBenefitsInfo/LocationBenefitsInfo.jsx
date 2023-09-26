import React from 'react'
import homeStyle from '@/app/home.module.css'

export default function LocationBenefitsInfo() {
    return (
        <div>
             <div className={`${homeStyle.locationInfo}`}>
                <span className={`${homeStyle.locationInfoTitle}`}>Dedicated Metro Station</span>
                {/* <p className={`${homeStyle.locationInfoDistance}`}>5 min drive</p> */}
            </div>
            <div className={`${homeStyle.locationInfo}`}>
                <span className={`${homeStyle.locationInfoTitle}`}>EMIRATES ROAD</span>
                <p className={`${homeStyle.locationInfoDistance}`}>5 min drive</p>
            </div>
            <div className={`${homeStyle.locationInfo}`}>
                <span className={`${homeStyle.locationInfoTitle}`}>AL MAKTOUM INTERNATIONAL AIRPORT</span>
                <p className={`${homeStyle.locationInfoDistance}`}>7 min drive</p>
            </div>
            <div className={`${homeStyle.locationInfo}`}>
                <span className={`${homeStyle.locationInfoTitle}`}>Dubai Parks and Resorts</span>
                <p className={`${homeStyle.locationInfoDistance}`}>15 min drive</p>
            </div>
            <div className={`${homeStyle.locationInfo}`}>
                <span className={`${homeStyle.locationInfoTitle}`}>THE PALM JEBEL ALI</span>
                <p className={`${homeStyle.locationInfoDistance}`}>25 min drive</p>
            </div>
            <div className={`${homeStyle.locationInfo}`}>
                <span className={`${homeStyle.locationInfoTitle}`}>DUBAI MARINA</span>
                <p className={`${homeStyle.locationInfoDistance}`}>25 min drive</p>
            </div>
            <div className={`${homeStyle.locationInfo}`}>
                <span className={`${homeStyle.locationInfoTitle}`}>MALL OF THE EMIRATES</span>
                <p className={`${homeStyle.locationInfoDistance}`}>30 min drive</p>
            </div>
        </div>
    )
}
