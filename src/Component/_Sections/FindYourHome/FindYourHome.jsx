import React from 'react'
import homeStyle from '@/app/home.module.css'
import Image from 'next/image'

export default function FindYourHome() {
    return (
        <section className={`${homeStyle.findHomeSection}`} >
            <div className={`${homeStyle.findHomeTitleSection}`}>
                <h1 className={`${homeStyle.mainTitle} ${homeStyle.findHomeTitle}`}>FIND YOUR HOME</h1>
                <p className={`${homeStyle.mainParagraph} ${homeStyle.findHomeParagraph}`}>As the tranquil crystal lagoon laps gently at your feet and the soothing echoes of waterfalls fill the air, you&#39;ll unmistakably realize you&#39;re finally home. Greet each day with awe-inspiring waterfront vistas from your luxurious villa or thoughtfully designed apartment. Below, a whole new realm of elevated living awaits your exploration.</p>
            </div>
            <div className={`${homeStyle.findHomeImageSection}`}>
                <div className={`${homeStyle.findHomeImageContainer}`} >
                    <Image
                        src="/Assets/Home/images/FindYourHome/Residence.png"
                        alt="Image"
                        width={100}
                        height={100}
                        className={homeStyle.findHomeImage}
                    />
                    <span className={`${homeStyle.findHomeImageTilte}`} >RESIDENCES</span>
                    <button className={`${homeStyle.findHomeImageButton}`}>
                        <Image
                            src="/Assets/Icons/Rectangle-icon.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={homeStyle.exploreIcon}
                        />
                        EXPLORE
                    </button>
                    <div className={`${homeStyle.findHomeImageOverlay}`}></div>
                </div>
                <div className={`${homeStyle.findHomeImageContainer}`} >
                    <Image
                        src="/Assets/Home/images/FindYourHome/Residence.png"
                        alt="Image"
                        width={100}
                        height={100}
                        className={homeStyle.findHomeImage}
                    />
                    <span className={`${homeStyle.findHomeImageTilte}`}>VILLAS</span>
                    <button className={`${homeStyle.findHomeImageButton}`}>
                        <Image
                            src="/Assets/Icons/Rectangle-icon.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={homeStyle.exploreIcon}
                        />
                        EXPLORE
                    </button>
                    <div className={`${homeStyle.findHomeImageOverlay}`}></div>
                </div>
            </div>
        </section>
    )
}
