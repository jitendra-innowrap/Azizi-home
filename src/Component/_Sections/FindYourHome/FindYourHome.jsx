'use client'
import React from 'react'
import homeStyle from '@/app/home/home.module.css'
import Image from 'next/image'
import FolowMouseCTA from '@/Component/Molecules/FindHomeImageCard/FindHomeImageCard'
import FindHomeImageCard from '@/Component/Molecules/FindHomeImageCard/FindHomeImageCard'
import FindHomeImageCard2 from '@/Component/Molecules/FindHomeImageCard/FindHomeImageCard2'
import { Player } from '@lottiefiles/react-lottie-player';

export default function FindYourHome() {
    return (
        <section className={`${homeStyle.findHomeSection}`} >
             <Player
                autoplay
                loop
                controls={false}
                src="BG-Animation/WaveAnimation.json"
                className={`${homeStyle.findHomeSectionBgAnimation}`}
            />
            <div className={`${homeStyle.findHomeTitleSection}`}>
                <h1 className={`${homeStyle.mainTitle} ${homeStyle.findHomeTitle}`}>FIND YOUR HOME</h1>
                <p className={`${homeStyle.mainParagraph} ${homeStyle.findHomeParagraph}`}>As the tranquil crystal lagoon laps gently at your feet and the soothing echoes of waterfalls fill the air, you&#39;ll unmistakably realize you&#39;re finally home. Greet each day with awe-inspiring waterfront vistas from your luxurious villa or thoughtfully designed apartment. Below, a whole new realm of elevated living awaits your exploration.</p>
            </div>
            <div className={`${homeStyle.findHomeImageSection}`}>
                <FindHomeImageCard image={`/Assets/Home/images/FindYourHome/Residence.png`} title={`RESIDENCES`} url={'/residences'} />
                <FindHomeImageCard image={`/Assets/Home/images/FindYourHome/Villas.png`} title={`VILLAS`} url={'/villas'} />
            </div>
        </section>
    )
}
