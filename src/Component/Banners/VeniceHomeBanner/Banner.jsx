'use client'
import { useEffect, useRef } from 'react';
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

    const videoRef = useRef(null);

    useEffect(() => {
        // Ensure the video is muted (autoplay requires muting)
        videoRef.current.muted = true;

        // Start the video
        videoRef.current.play().catch(error => {
            // Handle any play errors, e.g., related to autoplay restrictions
            console.error('Video playback error:', error);
        });
    }, []);

    return (
        <>
            <section className={Styles.homeBannerVideo}>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    playsInline
                    src="/Assets/Home/videos/backgroundGif.mp4"
                    type="video/mp4"
                    className={Styles.bannerVideo}
                >
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
