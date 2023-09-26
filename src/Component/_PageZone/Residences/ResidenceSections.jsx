import React from 'react'

import Banner from '@/Component/Banners/ResidenceBanner/Banner';
import IntroSection from '@/Component/_Sections/IntroSection/IntroSection';
import ExquisiteDetails from '@/Component/_Sections/ExquisiteDetails/ExquisiteDetails';
import Lifestyle from '@/Component/_Sections/Lifestyle/Lifestyle';
import LocationBenefits from '@/Component/_Sections/LocationBenefits/LocationBenefits';

export default function ResidenceSections() {
    const BannerTitle = 'Venice RESIDENCES';
    const BannerImage = '/Assets/Residence/images/Banner.webp';
    const IntroSectionPara = 'Discover a revitalizing place to call home, where you wake up every day in an incredible waterfront paradise. With a gleaming Crystal Lagoon, pristine beachfront, vibrant boulevard, and world-class entertainment just steps away, this is a brand-new approach to apartment living, meticulously designed for the discerning few.';
    const IntroSectionCarouselImages = [
        '/Assets/Residence/images/Carousel-Gallery-1.webp',
        '/Assets/Residence/images/Carousel-Gallery-2.webp',
        '/Assets/Residence/images/Carousel-Gallery-3.webp',
        '/Assets/Residence/images/Carousel-Gallery-4.webp',
        '/Assets/Residence/images/Carousel-Gallery-5.webp'
    ]
    const ExquisiteDetailsPara = 'Every detail matters in this thoughtfully crafted environment, where meticulous architecture and premium design harmonize with the natural surroundings. Floor-to-ceiling windows seamlessly blend indoor and outdoor spaces, offering breathtaking views of the water and cascading waterfalls. Every detail impeccable, every material exquisite.';
    const LifestylePara = 'Experience a captivating lifestyle where your every desire is effortlessly fulfilled. Our apartment complexes are meticulously designed to encompass everything you need, including a state-of-the-art gym, steam room, sauna, your own cinema, and a clubhouse.';
    const LifestyleBoxTitle = [
        'POOLSIDE PERFECTION',
        'WORLD OF WELLNESS',
        'ELEVATED ENTERTAINMENT',
        'State-of-the-art WORKOUT',
        'WILD AND FREE'
    ]
    const LifestyleImage = '/Assets/Residence/images/life-style.webp';
    const LifestyleImageTitle = 'POOLSIDE PERFECTION';
    const LocationBenefitsTitle = 'LOCATION BENEFITS';
    const LocationBenefitsPara = 'Located in Dubai South, the city`s most expansive singular urban master development. Azizi Venice will become a part of a smart and futuristic metropolis that promises entirely new standard of living. Over 136 hectares in size, Azizi Venice is set to be a prestigious yet well-connected enclave.';
    return (
        <>
            <Banner title={BannerTitle} image={BannerImage} />
            <IntroSection para={IntroSectionPara} images={IntroSectionCarouselImages}/>
            {/* <ExquisiteDetails para={ExquisiteDetailsPara} /> */}
            <Lifestyle para={LifestylePara} listItem={LifestyleBoxTitle} image={LifestyleImage} imageTitle={LifestyleImageTitle}/>
            <LocationBenefits title={LocationBenefitsTitle} para={LocationBenefitsPara} />
        </>
    )
}
