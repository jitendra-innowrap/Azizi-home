import React from 'react'
import homeStyle from '@/app/home.module.css'
import Map from '@/Component/Map/Map'


export default function LocationBenefits() {
    return (
        <section className={`${homeStyle.futureSurroundingSection}`}>
            <h1 className={`${homeStyle.mainTitle} ${homeStyle.futureSurroundingTitle}`}>THE DESTINATION</h1>
            <p className={`${homeStyle.mainParagraph} ${homeStyle.futureSurroundingParagraph}`}>Nestled in the breathtaking Arabian sands of Dubai South, Azizi Venice is poised to be an integral part of a smart and forward-thinking metropolis, spanning over 136 hectares. This prestigious enclave offers close proximity to the city&#39;s finest attractions, with direct access to the upcoming metro station and Etihad Rail Network, ensuring convenience and connectivity for residents.</p>
            <div className={`${homeStyle.mapSection}`}>
                <div className={`${homeStyle.column7}`}>
                    <Map />
                </div>
                <div className={`${homeStyle.column5} ${homeStyle.locationInfoDiv}`}>
                    <div>
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
                </div>
            </div>
        </section>
    )
}
