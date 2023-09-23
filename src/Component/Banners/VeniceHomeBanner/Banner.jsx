'use client'
import { useRef } from 'react';
import Styles from './Banner.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {

    const myDivRef = useRef(null);

    const scrollToTop = () => {
        if (myDivRef.current) {
            myDivRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className={Styles.homeBannerVideo}>
                <video autoPlay muted loop id="bg-video" className={Styles.bannerVideo}>
                    <source src="/Assets/Home/videos/backgroundGif.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={Styles.videoOverlay}></div>
                <button className={Styles.playBtn}
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
                </button>
            </section>
            <div id="myDiv" ref={myDivRef}></div>
        </>
    );
}
