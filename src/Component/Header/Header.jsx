'use client'
import React, { useState } from 'react';
import Styles from './Header.module.css'
import Link from 'next/link';
import Image from 'next/image';
import CTAPopUp from '../Molecules/CTAPopUp/CTAPopUp';

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            {/* nav bar */}
            <header id='header-bar'>
                <nav className={`${Styles.navbar} nav_bar`} >
                    <div className={`${Styles.navbarContainer} navbarContainer `}>
                    <div className={`${Styles.leftLinks} nav_links`}>
                        <Link href="https://azizidevelopments.com/en/about" className={Styles.navLinks}>About</Link>
                        <Link href="https://azizidevelopments.com/en/destinations" className={Styles.navLinks}>Communities</Link>
                        <Link href="https://azizidevelopments.com/en/dubai" className={Styles.navLinks}>Projects</Link>
                        <Link href="https://azizidevelopments.com/en/retail/dubai" className={Styles.navLinks}>Retail</Link>
                        <Link href="https://azizidevelopments.com/en/media-center" className={Styles.navLinks}>Media</Link>
                    </div>
                        {/* <div className="nav_logos"> */}
                            <Link href={'/home'} className={`${Styles.navLogo} logo_white`}>
                        <Image
                            src="/Assets/Azizi_Logo.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.navLogoImage}
                        />
                    </Link>
                    <Link href={'/'} className={`${Styles.mobileBlackLogo} logo_black`}>
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
                        {/* <Link href="/" className={Styles.navLinksLanuage}> العربية</Link> */}
                            {/* <Link  href="#home_form"  className={Styles.navLinksButton}>ENQUIRE</Link> */}
                            <button className={Styles.navLinksButton} style={{ position: 'relative' }} >
                                <CTAPopUp />
                                ENQUIRE</button>
                    </div>
                </div>
            </nav>

            {/* mobile nav bar */}
                <div className="mobile">
                    <Link href={'/'} className={`${Styles.mobileWhiteLogo} ${isActive ? Styles.mobileNavHide : Styles.mobileNavShow} mobile_header_buttons`}>
            <Image
                            src="/Assets/Azizi_Logo.svg"
                alt="Image"
                width={100}
                height={100}
                            className={`${Styles.mobileNavLogoImage} logo_white`} />
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
                    src="/Assets/Icons/BurgerMenu.svg"
                alt="Image"
                width={100}
                height={100}
                            className={`${Styles.menuBtnImage} logo_white`}
                            onClick={toggleClass}
                        />
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
                    <div className={Styles.LinksMobile}>
                        <Link href="https://azizidevelopments.com/en/about" className={Styles.navLinksMobile}>About</Link>
                        <Link href="https://azizidevelopments.com/en/destinations" className={Styles.navLinksMobile}>Communities</Link>
                        <Link href="https://azizidevelopments.com/en/dubai" className={Styles.navLinksMobile}>Projects</Link>
                        <Link href="https://azizidevelopments.com/en/retail/dubai" className={Styles.navLinksMobile}>Retail</Link>
                        <Link href="https://azizidevelopments.com/en/media-center" className={Styles.navLinksMobile}>Media</Link>
                        <Link  href="/home" className={Styles.navLinksMobile}>Azizi Venice</Link>
                        {/* <Link href="/" className={Styles.navLinks}>Contact</Link> */}
                        <Link href="tel:80029494" className={Styles.navLinksMobile}>800 (AZIZI) 29494</Link>
                        {/* <Link href="/" className={Styles.navLinksLanuageMobile}> العربية</Link> */}
                        <Link href="#home_form"  className={Styles.navLinksButtonMobile}>ENQUIRE</Link>
                    </div>
                </div>
            </nav>
                </div>
                {/* Breadcrumb */}
                {/* <div className={Styles.breadCrumbs}>
                    <div className={Styles.breadCrumbsBox}>
                        <Link className={Styles.Link} href="/home">Home</Link>
                        <Image
                            src="/Assets/Residence/images/chevron-right.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.chevronRight}
                        />
                        <Link className={Styles.Link} href="/home">Azizi Venice, Dubai South</Link>
                        <Image
                            src="/Assets/Residence/images/chevron-right.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={`${Styles.chevronRight} ${Styles.mobileHide}`}
                        />
                        <Link className={`${Styles.Link} ${Styles.mobileHide}`} href="/">{"title"}</Link>
                    </div>
                </div> */}
            </header>
        </>
    );
}
