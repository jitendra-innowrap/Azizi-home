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

export default function ResidenceSections() {
    const { language, changeLanguage } = useLanguage();
    const BannerTitle = 'Venice RESIDENCES';
    const BannerImage = '/Assets/Residence/images/Banner.webp';
    const IntroSectionPara = translations[language].residence.IntroSectionPara;
    const IntroSectionCarouselImages = [
        '/Assets/Residence/images/Carousel-Gallery-1.webp',
        '/Assets/Residence/images/Carousel-Gallery-2.webp',
        '/Assets/Residence/images/Carousel-Gallery-3.webp',
        '/Assets/Residence/images/Carousel-Gallery-4.webp',
        '/Assets/Residence/images/Carousel-Gallery-5.webp'
    ]
    const IntroSectionDownloadFloorPlan =  translations[language].residence.IntroSectionDownloadFloorPlan;
    const IntroSectionDownloadBrochure =  translations[language].residence.IntroSectionDownloadBrochure;
    const IntroSectionDownloadUnitPlans =  translations[language].residence.IntroSectionDownloadUnitPlans;
    const ExquisiteDetailsPara = 'Every detail matters in this thoughtfully crafted environment, where meticulous architecture and premium design harmonize with the natural surroundings. Floor-to-ceiling windows seamlessly blend indoor and outdoor spaces, offering breathtaking views of the water and cascading waterfalls. Every detail impeccable, every material exquisite.';
    const LifestyleTitle = translations[language].residence.LifestyleTitle;
    const LifestylePara = translations[language].residence.LifestylePara;
    const LifestyleBoxTitle = [
        translations[language].residence.LifestyleBoxTitle1,
        translations[language].residence.LifestyleBoxTitle2,
        translations[language].residence.LifestyleBoxTitle3,
        translations[language].residence.LifestyleBoxTitle4,
        translations[language].residence.LifestyleBoxTitle5,
        translations[language].residence.LifestyleBoxTitle6,
    ]
    const LifestyleImage = '/Assets/Residence/images/life-style.webp';
    const LifestyleImageTitle = 'POOLSIDE PERFECTION';
    const LocationBenefitsTitle =  translations[language].residence.LocationBenefitsTitle;
    const LocationBenefitsPara = translations[language].residence.LocationBenefitsPara;
    return (
        <>
            <Banner title={BannerTitle} image={BannerImage} />
            <IntroSection btn1={IntroSectionDownloadFloorPlan} btn2={IntroSectionDownloadBrochure} btn3={IntroSectionDownloadUnitPlans} para={IntroSectionPara} images={IntroSectionCarouselImages} showHide={'block'}/>
            {/* <ExquisiteDetails para={ExquisiteDetailsPara} /> */}
            <Lifestyle title={LifestyleTitle} para={LifestylePara} listItem={LifestyleBoxTitle} image={LifestyleImage} imageTitle={LifestyleImageTitle}/>
            <LocationBenefits title={LocationBenefitsTitle} para={LocationBenefitsPara} />
            <FormSection />
        </>
    )
}
