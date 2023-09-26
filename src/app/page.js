'use client'
import Image from 'next/image'
import styles from './page.module.css'
import './globals.css'
import 'react-phone-input-2/lib/style.css';
import LeadForm from '@/Component/LeadForm';
import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {

  const [isArabic, setIsArabic] = useState(false);

  // Function to toggle the language
  const toggleLanguage = () => {
    setIsArabic((prevIsArabic) => !prevIsArabic);
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
    <main className={styles.Main}>
      <Head>
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
        <title>My Page</title>
      </Head>
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        src="/Assets/Launch/videos/backgroundGif.mp4"
        type="video/mp4"
        className={styles.video}
      >
        Your browser does not support the video tag.
      </video>
      {/* <video autoPlay loop id="bg-video" className={styles.video}>
          <source src="backgroundGif.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video> */}
      <div className={styles.overlayWhite}></div>
      <div className={styles.overlay}></div>
      <Image
        src="/Assets/Launch/svgs/coming-soon-bg-svg.svg"
        alt="Image"
        width={100}
        height={100}
        quality={100}
        className={styles.Svg}
      />
      <Link href='/'>
        <div className={styles.logo}>
          <Image
            src="/Assets/Launch/svgs/Azizi_Logo.svg"
            alt="Image"
            width={100}
            height={100}
            quality={100}
            className={styles.LogoImage}
          />
        </div>
      </Link>
      {/* <button className={styles.languageBtn} onClick={toggleLanguage}>{isArabic ? 'EN' : 'العربية'}</button> */}
      <div className={styles.content}>
        <div className={styles.formSection}>
          <div className={styles.columnLogo}>
            <Image
              src="/Assets/Launch/images/Azizi_Logo.png"
              alt="Image"
              width={335}
              height={230}
              quality={100}
              className={styles.companyImage}
            />
            <span className={styles.title}>{isArabic ? 'كن جزءًا من أيقونة دبي الجديدة' : 'BE PART OF THE NEXT LEGACY'}</span>
          </div>
          <div className={styles.columnForm}>
            <LeadForm isArabic={isArabic} isTitle={true} />
          </div>
        </div>
      </div>
    </main>
  )
}
