'use client'
import React, { useState } from 'react';
import Styles from './Header2.module.css'
import Link from 'next/link';
import Image from 'next/image';
import CTAPopUp from '../Molecules/CTAPopUp/CTAPopUp';
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';

export default function Header2() {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    const { language, changeLanguage } = useLanguage();
    return (
        <>
            {/* nav bar */}
            <nav className={Styles.navbar}>
                <div className={Styles.navbarContainer}>
                    <div className={`${Styles.leftLinks} nav_links`}>
                        <Link href="https://azizidevelopments.com/en/about" className={Styles.navLinks}>About</Link>
                        <Link href="https://azizidevelopments.com/en/destinations" className={Styles.navLinks}>Communities</Link>
                        <Link href="https://azizidevelopments.com/en/dubai" className={Styles.navLinks}>Projects</Link>
                        <Link href="https://azizidevelopments.com/en/retail/dubai" className={Styles.navLinks}>Retail</Link>
                        <Link href="https://azizidevelopments.com/en/media-center" className={Styles.navLinks}>Media</Link>
                    </div>
                    <Link href="https://azizidevelopments.com/" className={`${Styles.navLogo} logo_white`}>
                        <Image
                            src="/Assets/Azizi_Logo.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.navLogoImage}
                        />
                    </Link>
                    <div className={`${Styles.rightLinks} nav_links`}>
                        {/* <Link href="/" className={Styles.navLinks} style={{ opacity: 0 }}>Azizi Venice</Link> */}
                        <a href="tel:80029494" className={Styles.navLinks}>800 (AZIZI) 29494</a>
                        {/* <button onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')} className={Styles.navLinksLanuage}>{translations[language].header.language}</button> */}
                        <button className={Styles.navLinksButton} style={{ position: 'relative' }} >
                            <CTAPopUp />
                            ENQUIRE
                        </button>
                    </div>
                </div>
            </nav>

            {/* mobile nav bar */}
            <Link href={'https://azizidevelopments.com/'} className={`${Styles.mobileWhiteLogo} ${isActive ? Styles.mobileNavHide : Styles.mobileNavShow}`}>
                <Image
                    src="/Assets/Azizi_Logo.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={Styles.mobileNavLogoImage}
                />
            </Link>
            <button className={`${Styles.menuBtn} ${isActive ? Styles.mobileNavHide : Styles.mobileNavShow}`}>
                <Image
                    src="/Assets/Icons/BurgerMenu.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={Styles.menuBtnImage}
                    onClick={toggleClass}
                />
            </button>
            <nav className={`${Styles.navbarMobile} ${isActive ? Styles.mobileNavShow : Styles.mobileNavHide}`}>
                <Link href={'https://azizidevelopments.com/'} className={`${Styles.mobileBlackLogo}`}>
                    <Image
                        src="/Assets/black-Logo.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        className={Styles.mobileNavLogoBlackImage}
                    />
                </Link>
                <button className={`${Styles.menuBlackBtn}`}>
                    <Image
                        src="/Assets/Icons/BurgerMenuBlack.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        className={Styles.menuBtnBlackImage}
                        onClick={toggleClass}
                    />
                </button>
                <div className={Styles.navbarContainerMobile}>
                    <div className={Styles.LinksMobile}>
                        <Link href="https://azizidevelopments.com/en/about" className={Styles.navLinksMobile}>About</Link>
                        <Link href="https://azizidevelopments.com/en/destinations" className={Styles.navLinksMobile}>Communities</Link>
                        <Link href="https://azizidevelopments.com/en/dubai" className={Styles.navLinksMobile}>Projects</Link>
                        <Link href="https://azizidevelopments.com/en/retail/dubai" className={Styles.navLinksMobile}>Retail</Link>
                        <Link href="https://azizidevelopments.com/en/media-center" className={Styles.navLinksMobile}>Media</Link>
                        {/* <Link href="/home" className={Styles.navLinksMobile}>Azizi Venice</Link> */}
                        {/* <Link href="/" className={Styles.navLinks}>Contact</Link> */}
                        <a href="tel:80029494" className={Styles.navLinksMobile}>800 (AZIZI) 29494</a>
                        {/* <Link href="/" className={Styles.navLinksLanuageMobile}> العربية</Link> */}
                        <Link href="" className={Styles.navLinksButtonMobile} style={{ position: 'relative' }} >
                            <CTAPopUp />ENQUIRE
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
