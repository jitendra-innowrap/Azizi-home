'use client'
import React from 'react'
import Banner from '@/Component/Banners/ResidenceBanner/Banner';
import IntroSection from '@/Component/_Sections/IntroSection/IntroSection';
import ExquisiteDetails from '@/Component/_Sections/ExquisiteDetails/ExquisiteDetails';
import Lifestyle from '@/Component/_Sections/Lifestyle/Lifestyle';
import LocationBenefits from '@/Component/_Sections/LocationBenefits/LocationBenefits';
import FormSection from '@/Component/FormSection/FormSection'
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';

export default function VillasSections() {
    const { language, changeLanguage } = useLanguage();
    const BannerTitle = translations[language].villas.BannerTitle;
    const BannerImage = '/Assets/Villa/images/Banner.webp';
    const IntroSectionPara = translations[language].villas.IntroSectionPara;
    const IntroSectionCarouselImages = [
        '/Assets/Villa/images/Carousel-Gallery-1.webp',
        '/Assets/Villa/images/Carousel-Gallery-2.webp',
        // '/Assets/Villa/images/Carousel-Gallery-3.webp',
        '/Assets/Villa/images/Carousel-Gallery-4.webp',
        '/Assets/Villa/images/Carousel-Gallery-5.webp',
        '/Assets/Villa/images/Carousel-Gallery-6.webp',
        '/Assets/Villa/images/Carousel-Gallery-7.webp'
    ]
    const IntroSectionDownloadFloorPlan =  translations[language].villas.IntroSectionDownloadFloorPlan;
    const IntroSectionDownloadBrochure =  translations[language].villas.IntroSectionDownloadBrochure;
    const ExquisiteDetailsPara = 'From the use of biophilic materials and serene color schemes to cutting-edge technology with exceptional functionality, each villa radiates an aura of refined elegance and tranquil grandeur.';
    const LifestyleTitle = translations[language].villas.LifestyleTitle;
    const LifestylePara =  translations[language].villas.LifestylePara;
    const LifestyleBoxTitle = [
        translations[language].villas.LifestyleBoxTitle1,
        translations[language].villas.LifestyleBoxTitle2,
        translations[language].villas.LifestyleBoxTitle3,
        translations[language].villas.LifestyleBoxTitle4,
        translations[language].villas.LifestyleBoxTitle5,
        translations[language].villas.LifestyleBoxTitle6,
    ]
    const LifestyleImage = '/Assets/Villa/images/life-style.webp';
    const LifestyleImageTitle = 'ELEVATED ENTERTAINMENT';
    const LocationBenefitsTitle =  translations[language].villas.LocationBenefitsTitle;
    const LocationBenefitsPara = translations[language].villas.LocationBenefitsPara;
    return (
        <>
            <Banner title={BannerTitle} image={BannerImage} />
            <IntroSection btn1={IntroSectionDownloadFloorPlan} btn2={IntroSectionDownloadBrochure} para={IntroSectionPara} images={IntroSectionCarouselImages}/>
            {/* <ExquisiteDetails para={ExquisiteDetailsPara} /> */}
            <Lifestyle title={LifestyleTitle} para={LifestylePara} listItem={LifestyleBoxTitle} image={LifestyleImage} imageTitle={LifestyleImageTitle} />
            <LocationBenefits title={LocationBenefitsTitle} para={LocationBenefitsPara} />
            <FormSection />
        </>
    )
}
