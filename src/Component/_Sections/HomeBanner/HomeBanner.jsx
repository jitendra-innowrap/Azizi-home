import React from 'react'
import HomeBannerMobile from './HomeBannerMobile'
import { useMediaQuery } from 'react-responsive'
import ParallexGridHero from '@/Component/ParallaxGridHero'

export default function HomeBanner() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' })

    return (
        <>
            {isBigScreen ?
                <ParallexGridHero /> :
            <HomeBannerMobile />
            }</>
    )
}
