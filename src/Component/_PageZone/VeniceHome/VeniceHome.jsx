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

export default function VeniceHome() {
    return (
        <>
            <Banner />
            <OasisOfDreams />
            <FindYourHome />
            <DesireOnDoorStep />
            <TheDestination title={'THE DESTINATION'} para={'Nestled in the breathtaking Arabian sands of Dubai South, Azizi Venice is poised to be an integral part of a smart and forward-thinking metropolis, spanning over 136 hectares. This prestigious enclave offers close proximity to the city&#39;s finest attractions, with direct access to the upcoming metro station and Etihad Rail Network, ensuring convenience and connectivity for residents.'} />
            <GetRealLook />
            <FormSection />
            <StickySocials />
        </>

    )
}
