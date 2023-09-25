import React from 'react';
import Image from 'next/image'
import '@/app/globals.css'
import homeStyle from '../home.module.css'
import Link from 'next/link';
import OasisDreamCarousel from '../../Component/OasisDreamCarousel';
import RealLookCarousel from '../../Component/RealLookCarousel';
import Footer from '@/Component/Footer/Footer';
import Header from '@/Component/Header/Header';
import MultiSliderSection from '@/Component/Home/MultiSliderSection/MultiSliderSection';
import PopUp from '@/Component/PopUp/PopUp';
import FormSection from '@/Component/FormSection/FormSection';
import Map from '@/Component/Map/Map';
import Multislider from '@/Component/Sliders/MultiSlider/Multislider';
import Banner from '@/Component/Banners/VeniceHomeBanner/Banner';
import Surrounding from '@/Component/Surrounding/Surrounding';
import VeniceHome from '@/Component/_PageZone/VeniceHome/VeniceHome';
// import FutureSurroundingMap from '../../Component/FutureSurroundingMap';

export default function page() {
    return (
        <main className={homeStyle.Main}>

            <Header />
            <VeniceHome />
            <Footer />
        </main>
    );
}
