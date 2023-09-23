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
                    {/* <div className={Styles.leftLinks}>
                    <Link href="/" className={Styles.navLinks}>About</Link>
                    <Link href="/" className={Styles.navLinks}>Communities</Link>
                    <Link href="/" className={Styles.navLinks}>Residences</Link>
                    <Link href="/" className={Styles.navLinks}>Retail</Link>
                    <Link href="/" className={Styles.navLinks}>Media</Link>
                </div> */}
                    <div className={Styles.navLogo}>
                        <Image
                            src="/Assets/Azizi_Logo.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.navLogoImage}
                        />
                    </div>
                    {/* <div className={Styles.rightLinks}>
                    <Link href="/" className={Styles.navLinks}>Azizi Venice</Link>
                    <Link href="/" className={Styles.navLinks}>800 (AZIZI) 29494</Link>
                    <Link href="/" className={Styles.navLinksLanuage}> العربية</Link>
                    <button className={Styles.navLinksButton}>ENQUIRE</button>
                </div> */}
                </div>
            </nav>

            {/* mobile nav bar */}
            {/* <div className={`${Styles.mobileWhiteLogo} ${isActive ? Styles.mobileNavHide : Styles.mobileNavShow}`}>
            <Image
                src="/Azizi_Logo.svg"
                alt="Image"
                width={100}
                height={100}
                className={Styles.mobileNavLogoImage}
            />
        </div> */}
            {/* <button className={`${Styles.menuBtn} ${isActive ? Styles.mobileNavHide : Styles.mobileNavShow}`}>
            <Image
                src="/home/BurgerMenu.svg"
                alt="Image"
                width={100}
                height={100}
                className={Styles.menuBtnImage}
                onClick={toggleClass}
            />
        </button> */}
            <nav className={`${Styles.navbarMobile} ${isActive ? Styles.mobileNavShow : Styles.mobileNavHide}`}>
                <div className={`${Styles.mobileBlackLogo}`}>
                    <Image
                        src="/black-Logo.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        className={Styles.mobileNavLogoBlackImage}
                    />
                </div>
                <button className={`${Styles.menuBlackBtn}`}>
                    <Image
                        src="/home/BurgerMenuBlack.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        className={Styles.menuBtnBlackImage}
                        onClick={toggleClass}
                    />
                </button>
                <div className={Styles.navbarContainerMobile}>
                    <div className={Styles.LinksMobile}>
                        <Link href="/" className={Styles.navLinksMobile}>About</Link>
                        <Link href="/" className={Styles.navLinksMobile}>Communities</Link>
                        <Link href="/" className={Styles.navLinksMobile}>Residences</Link>
                        <Link href="/" className={Styles.navLinksMobile}>Retail</Link>
                        <Link href="/" className={Styles.navLinksMobile}>Media</Link>
                        <Link href="/" className={Styles.navLinksMobile}>Azizi Venice</Link>
                        {/* <Link href="/" className={Styles.navLinks}>Contact</Link> */}
                        <Link href="/" className={Styles.navLinksMobile}>800 (AZIZI) 29494</Link>
                        <Link href="/" className={Styles.navLinksLanuageMobile}> العربية</Link>
                        <button className={Styles.navLinksButtonMobile}>ENQUIRE</button>
                    </div>
                </div>
            </nav>
        </>
    );
}
