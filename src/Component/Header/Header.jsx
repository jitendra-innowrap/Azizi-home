'use client'
import React, { useState } from 'react';
import Styles from './Header.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            {/* nav bar */}
            <nav className={Styles.navbar}>
                <div className={Styles.navbarContainer}>
                    <div className={Styles.leftLinks}>
                        <Link href="https://azizidevelopments.com/en/about" className={Styles.navLinks}>About</Link>
                        <Link href="https://azizidevelopments.com/en/destinations" className={Styles.navLinks}>Communities</Link>
                        <Link href="https://azizidevelopments.com/en/dubai" className={Styles.navLinks}>Projects</Link>
                        <Link href="https://azizidevelopments.com/en/retail/dubai" className={Styles.navLinks}>Retail</Link>
                        <Link href="https://azizidevelopments.com/en/media-center" className={Styles.navLinks}>Media</Link>
                    </div>
                    <Link href={'/home'} className={Styles.navLogo}>
                        <Image
                            src="/Assets/Azizi_Logo.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.navLogoImage}
                        />
                    </Link>
                    <div className={Styles.rightLinks}>
                    <Link href="/home" className={Styles.navLinks}>Azizi Venice</Link>
                    <Link href="tel:80029494" className={Styles.navLinks}>800 (AZIZI) 29494</Link>
                        {/* <Link href="/" className={Styles.navLinksLanuage}> العربية</Link> */}
                    <Link  href="#home_form"  className={Styles.navLinksButton}>ENQUIRE</Link>
                    </div>
                </div>
            </nav>

            {/* mobile nav bar */}
            <Link href={'/'} className={`${Styles.mobileWhiteLogo} ${isActive ? Styles.mobileNavHide : Styles.mobileNavShow}`}>
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
        </>
    );
}
