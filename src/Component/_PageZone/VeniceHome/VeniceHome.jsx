import Banner from '@/Component/Banners/VeniceHomeBanner/Banner'
import OasisDreamCarousel from '@/Component/OasisDreamCarousel'
import DesireOnDoorStep from '@/Component/_Sections/DesireOnDoorStep/DesireOnDoorStep'
import FindYourHome from '@/Component/_Sections/FindYourHome/FindYourHome'
import OasisOfDreams from '@/Component/_Sections/OasisOfDreams/OasisOfDreams'
import React from 'react'

export default function VeniceHome() {
    return (
        <>
            <Banner />
            <OasisOfDreams />
            <FindYourHome />
            <DesireOnDoorStep />
        </>

    )
}
