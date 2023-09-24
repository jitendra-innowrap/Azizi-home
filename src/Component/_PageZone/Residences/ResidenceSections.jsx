import React from 'react'

import Banner from '@/Component/Banners/ResidenceBanner/Banner';
import IntroSection from '@/Component/_Sections/IntroSection/IntroSection';
import ExquisiteDetails from '@/Component/_Sections/ExquisiteDetails/ExquisiteDetails';
import Lifestyle from '@/Component/_Sections/Lifestyle/Lifestyle';
import LocationBenefits from '@/Component/_Sections/LocationBenefits/LocationBenefits';

export default function ResidenceSections() {
    const BannerTitle = 'Venice RESIDENCES';
    const IntroSectionPara = 'Discover a revitalizing place to call home, where you wake up every day in an incredible waterfront paradise. With a gleaming lagoon, pristine beachfront, vibrant boulevard, and world-class entertainment just steps away, this is a brand-new approach to apartment living, meticulously designed for the discerning few.';
    const ExquisiteDetailsPara = 'Every detail matters in this thoughtfully crafted environment, where meticulous architecture and premium design harmonize with the natural surroundings. Floor-to-ceiling windows seamlessly blend indoor and outdoor spaces, offering breathtaking views of the water and cascading waterfalls. Every detail impeccable, every material exquisite.';
    const LifestylePara = 'Experience a captivating lifestyle where your every desire is effortlessly fulfilled. Our apartment complexes are meticulously designed to encompass everything you need, including a state-of-the-art gym, steam room, sauna, your own cinema, and a clubhouse.';
    const LifestyleBoxTitle = [
        'State-of-the-art gym',
        'Steam room & Sauna',
        'Cinema & Clubhouse',
        'Swimming Pool',
        'KIDS` PLAY AREA'
    ]
    const LocationBenefitsTitle = 'LOCATION BENEFITS';
    const LocationBenefitsPara = 'Located in Dubai South, the city&#39;s most expansive singular urban master development. Azizi Venice will become a part of a smart and futuristic metropolis that promises entirely new standard of living. Over 136 hectares in size, Azizi Venice is set to be a prestigious yet well-connected enclave.';
    return (
        <>
            <Banner title={BannerTitle} />
            <IntroSection para={IntroSectionPara} />
            <ExquisiteDetails para={ExquisiteDetailsPara} />
            <Lifestyle para={LifestylePara} listItem={LifestyleBoxTitle} />
            <LocationBenefits title={LocationBenefitsTitle} para={LocationBenefitsPara} />
        </>
    )
}
