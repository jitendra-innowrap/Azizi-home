import Image from 'next/image'
import React from 'react'
import styles from './HomeBannerMobile.module.css'
import VideoPopUp from '@/Component/Molecules/VideoPopUp/VideoPopUp'

export default function HomeBannerMobile() {
    return (
        <section className={styles.HomeBannerMobileSection}>
            <div className={styles.BannerGifWrapper}>
                <Image src={'/Assets/banner/Logo-Animation.gif'} className={styles.BannerGif} quality={100} height={449} width={702} style={{ margin: "auto", display: "block" }} />
            </div>
            <div className={styles.BannerVideoMobileWrapper}>
                <video
                    autoPlay
                    loop
                    playsInline
                    muted={true}
                    src="https://azizi-assets.fra1.cdn.digitaloceanspaces.com/Venice_15.webm"
                    type="video/webm"
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
