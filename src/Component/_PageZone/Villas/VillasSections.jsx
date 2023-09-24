import React from 'react'
import Banner from '@/Component/Banners/ResidenceBanner/Banner';
import IntroSection from '@/Component/_Sections/IntroSection/IntroSection';
import ExquisiteDetails from '@/Component/_Sections/ExquisiteDetails/ExquisiteDetails';
import Lifestyle from '@/Component/_Sections/Lifestyle/Lifestyle';
import LocationBenefits from '@/Component/_Sections/LocationBenefits/LocationBenefits';

export default function VillasSections() {
    const BannerTitle = 'Venice VILLAS';
    const IntroSectionPara = 'Tucked away in a charming, gated community along the crystal-blue lagoon, you&#39;ll find Azizi Venice Villas - meticulously designed for those who savor life&#39;s finer moments. Returning home to your Azizi Venice Villa is a lavish experience like no other in Dubai.';
    const ExquisiteDetailsPara = 'From the use of biophilic materials and serene color schemes to cutting-edge technology with exceptional functionality, each villa radiates an aura of refined elegance and tranquil grandeur.';
    const LifestylePara = 'Pamper yourself with an array of luxurious amenities designed to enhance your daily life. Each villa is a modern sanctuary, featuring a private elevator, home cinema, games room, personal infinity pool, opulent rooftop terrace, and a BBQ area for entertaining. Plus, you&#39;ll enjoy direct, effortless access to the swimmable lagoon, just steps from your doorstep.';
    const LifestyleBoxTitle = [
        'Direct LAGOON ACCESS',
        'State-of-the-art gym & Pool',
        'Outdoor Jacuzzi & Sauna',
        'Cinema & Club House',
        'LUSH INDOOR GARDENS',
        'MAJLIS'
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
