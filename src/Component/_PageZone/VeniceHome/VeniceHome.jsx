'use client'
import Banner from '@/Component/Banners/VeniceHomeBanner/Banner'
import FormSection from '@/Component/FormSection/FormSection'
import StickySocials from '@/Component/Molecules/StickySocials/StickySocials'
import OasisDreamCarousel from '@/Component/OasisDreamCarousel'
import DesireOnDoorStep from '@/Component/_Sections/DesireOnDoorStep/DesireOnDoorStep'
import FindYourHome from '@/Component/_Sections/FindYourHome/FindYourHome'
import GetRealLook from '@/Component/_Sections/GetRealLook/GetRealLook'
import TheDestination from '@/Component/_Sections/TheDestination/TheDestination'
import OasisOfDreams from '@/Component/_Sections/OasisOfDreams/OasisOfDreams'
import React from 'react'
import ParallexGridHero from '@/Component/ParallaxGridHero'
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';
import HomeBanner from '@/Component/_Sections/HomeBanner/HomeBanner'

export default function VeniceHome() {
    const { language, changeLanguage } = useLanguage();
    return (
        <>
            {/* <Banner /> */}
            <ParallexGridHero />
            <HomeBanner />
            <OasisOfDreams />
            <FindYourHome />
            <DesireOnDoorStep />
            <TheDestination title={translations[language].home.destinationTitle} para={translations[language].home.destinationPara} />
            <GetRealLook />
            <FormSection />
            <StickySocials />
        </>

    )
}
