import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={`${styles.footerSection}`}>
            <div className={`${styles.footerHead}`}>
                <Image
                    src="/Assets/Icons/white_logo.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={styles.whiteLogo}
                />
                <div className={`${styles.iconsDiv}`}>
                    <Link href="https://www.facebook.com/AziziGroup/" target='_blank' className={styles.iconlink}>
                        <Image
                            src="/Assets/Icons/Facebook.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={styles.iconImg}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/company/azizi-developments" target='_blank' className={styles.iconlink}>
                        <Image
                            src="/Assets/Icons/Linkedin.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={styles.iconImg}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/azizigroup/?hl=en" target='_blank' className={styles.iconlink}>
                        <Image
                            src="/Assets/Icons/Instagram.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={styles.iconImg}
                        />
                    </Link>
                    <Link href="https://twitter.com/azizigroup?lang=en" target='_blank' className={styles.iconlink}>
                        <Image
                            src="/Assets/Icons/twitter-x.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={styles.iconImg}
                        />
                    </Link>
                </div>
            </div>
            <div className={`${styles.footerMain}`}>
                <div className={`${styles.linkSection}`}>
                    <div className={`${styles.linkColumn} ${styles.linkColumn1}`}>
                        <span  className={`${styles.linkColumnHeading}`}>About us</span>
                        <div className={`${styles.links}`}>
                            <Link href="https://azizidevelopments.com/en/about" className={styles.link}>About us</Link>
                            <Link href="https://azizidevelopments.com/en/management" className={styles.link}>Corporate Executives</Link>
                            <Link href="https://azizidevelopments.com/en/about" className={styles.link}>Invest with Azizi</Link>
                            <Link href="https://azizidevelopments.com/en/career" className={styles.link}>Careers</Link>
                            <Link href="https://azizidevelopments.com/en/contact" className={styles.link}>Contact us</Link>
                        </div>
                    </div>
                    <div className={`${styles.linkColumn} ${styles.linkColumn2}`}>
                        <span  className={`${styles.linkColumnHeading}`}>Our portfolio</span>
                        <div className={`${styles.links}`}>
                            <Link href="https://azizidevelopments.com/en/destinations" className={styles.link}>Communities</Link>
                            <Link href="https://azizidevelopments.com/en/dubai" className={styles.link}>Residences</Link>
                            <Link href="https://azizidevelopments.com/en/retail/dubai" className={styles.link}>Commercial</Link>
                            <Link href="https://azizidevelopments.com/en/dubai/construction-updates" className={styles.link}>Construction updates</Link>
                            <Link href="https://azizidevelopments.com/en/walkthrough" className={styles.link}>Virtual tour</Link>
                        </div>
                    </div>
                    <div className={`${styles.linkColumn}`}>
                        <span  className={`${styles.linkColumnHeading}`}>Digital services</span>
                        <div className={`${styles.links}`}>
                            <Link href="https://azizidevelopments.com/en/exclusive-offers" className={styles.link}>Offers</Link>
                            <Link href="https://azizidevelopments.com/" className={styles.link}>Handover procedure</Link>
                            <Link href="https://azizidevelopments.com/en/online-payments" className={styles.link}>Pay online</Link>
                        </div>
                    </div>
                </div>
                <div className={`${styles.divForm} ${styles.linkColumn3}`}>
                    {/* <div className={`${styles.linkColumn} ${styles.formSection}`}>
                        <span  className={`${styles.linkColumnHeading}`}>Newsletter</span>
                        <div className={`${styles.links}`}>
                            <Link href="/" className={styles.link}>Stay up to date with the latest news</Link>
                            <div className={`${styles.formDiv}`}>
                                <form className={styles.form} >
                                    <div className={styles.inputDiv}>
                                        <input className={styles.email}
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="off"
                                            placeholder='My emial is'
                                        />
                                        <button className={styles.emailBtn} >
                                            <Image
                                                src="/Assets/Icons/left-arrow-icon.svg"
                                                alt="Image"
                                                width={100}
                                                height={100}
                                                className={styles.emailBtnImage}
                                            />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className={`${styles.footerFooter}`}>
                <span className={`${styles.privacySpan}`}>Sitemap . <Link href="/" className={styles.PrivacyLink}>Privacy Policy</Link></span>
                <span className={`${styles.copySpan}`}>© 2023 AZIZI Developments</span>
            </div>
        </footer>
    )
}
