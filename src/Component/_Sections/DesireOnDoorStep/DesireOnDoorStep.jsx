import React from 'react'
import homeStyle from '@/app/home.module.css'
import Multislider from '@/Component/Sliders/MultiSlider/Multislider'
import LeftAnimation2 from '@/Component/LeftAnimation2/LeftAnimation2'

export default function DesireOnDoorStep() {
    return (
        <section className={`${homeStyle.aroundNeighborhoodSection} overXhidden`}>
            <h1 className={`${homeStyle.mainTitle} ${homeStyle.aroundNeighborhoodTitle}`}>EVERY DESIRE ON YOUR DOORSTEP</h1>
            <p className={`${homeStyle.mainParagraph} ${homeStyle.aroundNeighborhoodParagraph}`}>Embark on an enchanting journey through a destination steeped in culture, where you&#39;ll find a community that resonates with your soul and a lifestyle that captures your heart - all along the serene waterfront. Let the gentle symphony of cascading waterfalls serenade your senses as you meander down a boulevard adorned with exquisite restaurants, charming boutiques, and cozy cafes. Spend your days basking in the warm embrace of the sun on the pristine beachfront or forging unforgettable memories with friends, kayaking along the tranquil Crystal Lagoon. And as night falls, let your soul be moved by the spellbinding performances at the Opera House, creating moments that will linger in your heart forever.</p>
            <div className={`${homeStyle.aroundNeighborhoodSlider}`}>
                <LeftAnimation2 />
                <Multislider />
            </div>
        </section>
    )
}
