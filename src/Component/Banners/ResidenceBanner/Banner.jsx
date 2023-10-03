'use client'
import { useEffect, useRef } from 'react';
import Styles from './Banner.module.css'
import Link from 'next/link';
import Image from 'next/image';
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';

export default function Banner({ title, image }) {

    const myDivRef = useRef(null);

    const scrollToTop = () => {
        if (myDivRef.current) {
            myDivRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const { language, changeLanguage } = useLanguage();

    return (
        <>
            <section className={Styles.homeBannerVideo}>
                <img
                    src={image}
                    alt="Image"
                    // width={100}
                    // height={100}
                    priority
                    quality={100}
                    className={Styles.bannerVideo}
                />
                <div className={Styles.videoOverlay}></div>
                <h1 className={Styles.title}>{ title }</h1>
                {/* <button className={Styles.playBtn}
                    onClick={scrollToTop}
                >
                    <Image
                        src="/Assets/Home/svgs/mdi_play_icon.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        className={Styles.playSvg}
                    />
                    EXPLORE MORE
                </button> */}
                <div className={Styles.breadCrumbs}>
                    <div className={Styles.breadCrumbsBox} style={{justifyContent:`${language=='ar'? 'end':''}`, flexDirection:`${language=='ar'? 'row-reverse':''}`}}>
                        <Link className={Styles.Link} href="/home">{translations[language].residence.home}</Link>
                        <Image
                            src="/Assets/Residence/images/chevron-right.png" 
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.chevronRight}
                        />
                        <Link className={Styles.Link} href="/home">{translations[language].residence.AziziSouth}</Link>
                        <Image
                            src="/Assets/Residence/images/chevron-right.png"
                            alt="Image"
                            width={100}
                            height={100}
                           className={`${Styles.chevronRight} ${Styles.mobileHide}`}
                        />
                        <Link className={`${Styles.Link} ${Styles.mobileHide}`} href="/">{ title }</Link>
                    </div>
                </div>
            </section>
            <div id="myDiv" ref={myDivRef}></div>
        </>
    );
}
