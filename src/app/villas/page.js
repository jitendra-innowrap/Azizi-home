import React from 'react';
import homeStyle from '../home.module.css'
import Footer from '@/Component/Footer/Footer';
import Header from '@/Component/Header/Header';
import VillasSections from '@/Component/_PageZone/Villas/VillasSections';
import StickySocials from '@/Component/Molecules/StickySocials/StickySocials';
export default function page() {
    return (
        <main className={homeStyle.Main}>

            <Header />
            <VillasSections />
            <StickySocials />
            <Footer />
        </main>
    );
}
