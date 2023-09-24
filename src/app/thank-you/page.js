import Image from 'next/image'
import styles from '../page.module.css'
import React from 'react';
import DelayRedirect from '../../Component/ThankYou';
import Link from 'next/link';

export default function page() {
  return (
    <main className={styles.Main}>
      <Image
        src="/Assets/Launch/images/colour-logo.png"
        alt="Image"
        width={340}
        height={240}
        quality={100}
        className={`${styles.thankYoucompanyImage} ${styles.companyImage}`}
      />
      <Image
        src="/Assets/Launch/svgs/thank-you-bg.svg"
        alt="Image"
        width={100}
        height={100}
        className={`${styles.thankBgSvg}`}
      />
      <Image
        src="/Assets/Launch/svgs/Mobile - thank-you-bg.svg"
        alt="Image"
        width={100}
        height={100}
        className={`${styles.thankBgSvgMobile} `}
      />
      <Link href={`/`} className={styles.tYlogo}>
          <Image
          src="/Assets/Launch/svgs/black-Logo.svg"
            alt="Image"
            width={100}
            height={100}
            className={styles.tYLogoImage}
          />
        </Link>
      <div className={styles.content}>
        <div className={styles.formSection}>
          <div className={styles.columnLogo}>
            <span className={`${styles.thankYouTitle}`}>Thank you for your interest</span>
          </div>
        </div>
      </div>
      <DelayRedirect delayTime={5000} redirectTo="/" />
    </main>
  )
}