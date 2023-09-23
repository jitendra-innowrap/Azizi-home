import React from 'react';
import homeStyle from '../home.module.css'
import Footer from '@/Component/Footer/Footer';
import Header from '@/Component/Header/Header';
import ResidenceSections from '@/Component/_PageZone/Residences/ResidenceSections';
export default function page() {
    return (
        <main className={homeStyle.Main}>

            <Header />
            <ResidenceSections />            
            <Footer />
        </main>
    );
}
