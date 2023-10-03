'use client'
import React from 'react'
import homeStyle from '@/app/home/home.module.css'
import Image from 'next/image'
import FolowMouseCTA from '@/Component/Molecules/FindHomeImageCard/FindHomeImageCard'
import FindHomeImageCard from '@/Component/Molecules/FindHomeImageCard/FindHomeImageCard'
import FindHomeImageCard2 from '@/Component/Molecules/FindHomeImageCard/FindHomeImageCard2'
import { Player } from '@lottiefiles/react-lottie-player';
import translations from '@/translations/translations.json';
import useLanguage from '@/hooks/useLanguage';

export default function FindYourHome() {
    const { language, changeLanguage } = useLanguage();
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
                <h1 className={`${homeStyle.mainTitle} ${homeStyle.findHomeTitle}`}>{translations[language].home.findTitle}</h1>
                <p className={`${homeStyle.mainParagraph} ${homeStyle.findHomeParagraph}`}>{translations[language].home.findPara}</p>
            </div>
            <div className={`${homeStyle.findHomeImageSection}`}>
                <FindHomeImageCard image={`/Assets/Home/images/FindYourHome/ResidencesCard.webp`} title={translations[language].home.findResidence} url={'/residences'} />
                <FindHomeImageCard image={`/Assets/Home/images/FindYourHome/VillasCard.webp`} title={translations[language].home.findVillas} url={'/villas'} />
            </div>
        </section>
    )
}
