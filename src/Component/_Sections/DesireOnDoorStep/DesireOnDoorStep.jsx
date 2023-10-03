import React from 'react'
import homeStyle from '@/app/home.module.css'
import Multislider from '@/Component/Sliders/MultiSlider/Multislider'
import LeftAnimation2 from '@/Component/LeftAnimation2/LeftAnimation2'
import translations from '@/translations/translations.json';
import useLanguage from '@/hooks/useLanguage';

export default function DesireOnDoorStep() {
    const { language, changeLanguage } = useLanguage();
    return (
        <section className={`${homeStyle.aroundNeighborhoodSection}`}>
            <h1 className={`${homeStyle.mainTitle} ${homeStyle.aroundNeighborhoodTitle}`}>{translations[language].home.doorTitle}</h1>
            <p className={`${homeStyle.mainParagraph} ${homeStyle.aroundNeighborhoodParagraph}`}>{translations[language].home.doorPara}</p>
            <div className={`${homeStyle.aroundNeighborhoodSlider}`}>
                <LeftAnimation2 />
                <Multislider />
            </div>
        </section>
    )
}
