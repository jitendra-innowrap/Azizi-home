'use client'
import React, { useState } from 'react';
import Styles from './Header.module.css'
import Link from 'next/link';
import Image from 'next/image';
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';
import CTAPopUp from '../Molecules/CTAPopUp/CTAPopUp';

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    const { language, changeLanguage } = useLanguage();
    return (
        <>
            {/* nav bar */}
            <header id='header-bar'>
                <nav className={`${Styles.navbar} nav_bar`} >
                    <div className={`${Styles.navbarContainer} navbarContainer `}>
                    <div className={`${Styles.leftLinks} nav_links`}>
                        <Link href="https://azizidevelopments.com/en/about" className={Styles.navLinks}>{translations[language].header.ABOUT}</Link>
                        <Link href="https://azizidevelopments.com/en/destinations" className={Styles.navLinks}>{translations[language].header.COMMUNITIES}</Link>
                        <Link href="https://azizidevelopments.com/en/dubai" className={Styles.navLinks}>{translations[language].header.PROJECTS}</Link>
                        <Link href="https://azizidevelopments.com/en/retail/dubai" className={Styles.navLinks}>{translations[language].header.RETAIL}</Link>
                        <Link href="https://azizidevelopments.com/en/media-center" className={Styles.navLinks}>{translations[language].header.MEDIA}</Link>
                    </div>
                    <Link href={'/home'} className={`${Styles.navLogo} logo_white`}>
                        <Image
                            src="/Assets/Azizi_Logo.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.navLogoImage}
                        />
                    </Link>
                    <Link href="https://azizidevelopments.com/" className={`${Styles.mobileBlackLogo} logo_black`}>
                        <Image
                            src="/Assets/Azizi_Logo_black.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.navLogoImage}
                        />
                    </Link>
                        {/* </div> */}
                    <div className={`${Styles.rightLinks} nav_links`}>
                            <Link href="/home" className={Styles.navLinks} style={{ opacity: 0 }}>Azizi Venice</Link>
                            <Link href="tel:80029494" className={Styles.navLinks}>800 (AZIZI) 29494</Link>
                            <button onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')} className={Styles.navLinksLanuage}>{translations[language].header.language}</button>
                            <button className={Styles.navLinksButton} style={{ position: 'relative' }} >
                                <CTAPopUp />
                                {translations[language].header.ENQUIRE}</button>
                    </div>
                </div>
            </nav>

            {/* mobile nav bar */}
                <div className="mobile">
                    <Link href={'/'} className={`${Styles.mobileWhiteLogo} ${isActive ? Styles.mobileNavHide : Styles.mobileNavShow} mobile_header_buttons`}>

                        <Image
                            src="/Assets/Azizi_Logo_black.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={`${Styles.mobileNavLogoImage} logo_black`}
            />
            </Link>
                    <button className={`${Styles.menuBtn} ${isActive ? Styles.mobileNavHide : Styles.mobileNavShow} mobile_header_buttons`}>
                        <Image
                            src="/Assets/Icons/BurgerMenuBlack.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={`${Styles.menuBtnImage} logo_black`}
                onClick={toggleClass}
            />
            </button>
            <nav className={`${Styles.navbarMobile} ${isActive ? Styles.mobileNavShow : Styles.mobileNavHide}`}>
                <Link href={'/'} className={`${Styles.mobileBlackLogo}`}>
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
                    <div className={Styles.LinksMobile} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                        <Link href="https://azizidevelopments.com/en/about" className={Styles.navLinksMobile}>{translations[language].header.ABOUT}</Link>
                        <Link href="https://azizidevelopments.com/en/destinations" className={Styles.navLinksMobile}>{translations[language].header.COMMUNITIES}</Link>
                        <Link href="https://azizidevelopments.com/en/dubai" className={Styles.navLinksMobile}>{translations[language].header.PROJECTS}</Link>
                        <Link href="https://azizidevelopments.com/en/retail/dubai" className={Styles.navLinksMobile}>{translations[language].header.RETAIL}</Link>
                        <Link href="https://azizidevelopments.com/en/media-center" className={Styles.navLinksMobile}>{translations[language].header.MEDIA}</Link>
                                {/* <Link  href="/home" className={Styles.navLinksMobile}>Azizi Venice</Link> */}
                        {/* <Link href="/" className={Styles.navLinks}>Contact</Link> */}
                        <Link href="tel:80029494" className={Styles.navLinksMobile}>800 (AZIZI) 29494</Link>
                        {/* <Link href="/" className={Styles.navLinksLanuageMobile}> العربية</Link> */}
                        <button onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')} className={Styles.navLinksLanuageMobile} style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].header.language}</button>
                                <Link href="" className={Styles.navLinksButtonMobile} style={{ position: 'relative' }} >
                                    <CTAPopUp />{translations[language].header.ENQUIRE}
                                </Link>
                    </div>
                </div>
            </nav>
                </div>
            </header>
        </>
    );
}
