'use client'
import { useEffect, useRef } from 'react';
import Styles from './Banner.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Banner({ title }) {

    const myDivRef = useRef(null);

    const scrollToTop = () => {
        if (myDivRef.current) {
            myDivRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className={Styles.homeBannerVideo}>
                <Image
                    src="/Assets/Residence/images/Banner.png"
                    alt="Image"
                    width={100}
                    height={100}
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
                    <div className={Styles.breadCrumbsBox}>
                        <Link className={Styles.Link} href="/">Home</Link>
                        <Image
                            src="/Assets/Residence/images/chevron-right.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.chevronRight}
                        />
                        <Link className={Styles.Link} href="/">Azizi Venice, Dubai South</Link>
                        <Image
                            src="/Assets/Residence/images/chevron-right.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.chevronRight}
                        />
                        <Link className={Styles.Link} href="/">{ title }</Link>
                    </div>
                </div>
            </section>
            <div id="myDiv" ref={myDivRef}></div>
        </>
    );
}
