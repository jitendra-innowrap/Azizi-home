import React from 'react'

import Banner from '@/Component/Banners/VeniceHomeBanner/Banner';
import IntroSection from '@/Component/_Sections/IntroSection/IntroSection';
import ExquisiteDetails from '@/Component/_Sections/ExquisiteDetails/ExquisiteDetails';
import Lifestyle from '@/Component/_Sections/Lifestyle/Lifestyle';
import LocationBenefits from '@/Component/_Sections/LocationBenefits/LocationBenefits';

export default function ResidenceSections() {
    return (

        <>
            <Banner />
            <IntroSection />
            <ExquisiteDetails />
            <Lifestyle />
            <LocationBenefits />
        </>
    )
}
