'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styles from './HomeBannerMobile.module.css'
import VideoPopUp from '@/Component/Molecules/VideoPopUp/VideoPopUp'

export default function HomeBannerMobile() {
    const videoRef1 = useRef(null);
    useEffect(() => {
        // Ensure the video is muted (autoplay requires muting)
        videoRef1.current.muted = true;

        const playVideo = (videoRef) => {
            if (videoRef.current) {
                videoRef.current.play().catch((error) => {
                    // Handle any play errors, e.g., related to autoplay restrictions
                    console.error('Video playback error:', error);
                });
            }
        };

        playVideo(videoRef1);
    }, []);

    return (
        <section className={styles.HomeBannerMobileSection}>
            <div className={styles.BannerGifWrapper}>
                <Image src={'/Assets/banner/Logo-Animation.gif'} className={styles.BannerGif} quality={100} height={449} width={702} style={{ margin: "auto", display: "block" }} />
            </div>
            <div className={styles.BannerVideoMobileWrapper}>
                <video
                    ref={videoRef1}
                    autoPlay
                    loop
                    playsInline
                    src="https://azizi-assets.fra1.cdn.digitaloceanspaces.com/Venice_15s.mp4"
                    type="video/mp4"
                    className={styles.BannerVideoMobile}
                >
                    Your browser does not support the video tag.
                </video>
                <div className={styles.exploreWrapper}>
                    <VideoPopUp />
                </div>
            </div>
        </section>
    )
}
