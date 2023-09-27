import React from 'react';
import homeStyle from '../home.module.css'
import '@/app/globals.css'

import Footer from '@/Component/Footer/Footer';
import Header from '@/Component/Header/Header';
import VillasSections from '@/Component/_PageZone/Villas/VillasSections';
import StickySocials from '@/Component/Molecules/StickySocials/StickySocials';
import Header2 from '@/Component/Header/Header2';
export default function page() {
    return (
        <main className={homeStyle.Main}>

            <Header2 />
            <VillasSections />
            <StickySocials />
            <Footer />
        </main>
    );
}
