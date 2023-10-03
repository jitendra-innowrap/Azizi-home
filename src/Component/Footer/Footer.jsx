'use client'
import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link';
import Image from 'next/image';
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';

export default function Footer() {
    const { language, changeLanguage } = useLanguage();
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
                    <div className={`${styles.linkColumn} ${styles.linkColumn1}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                        <span  className={`${styles.linkColumnHeading}`}>{translations[language].footer.aboutUs}</span>
                        <div className={`${styles.links}`}>
                            <Link href="https://azizidevelopments.com/en/about" className={styles.link}>{translations[language].footer.aboutUs}</Link>
                            <Link href="https://azizidevelopments.com/en/management" className={styles.link}>{translations[language].footer.corporateExecutives}</Link>
                            <Link href="https://azizidevelopments.com/en/career" className={styles.link}>{translations[language].footer.career}</Link>
                            <Link href="https://azizidevelopments.com/en/contact" className={styles.link}>{translations[language].footer.contact}</Link>
                        </div>
                    </div>
                    <div className={`${styles.linkColumn} ${styles.linkColumn2}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                        <span  className={`${styles.linkColumnHeading}`}>{translations[language].footer.ourPorfolio}</span>
                        <div className={`${styles.links}`}>
                            <Link href="https://azizidevelopments.com/en/destinations" className={styles.link}>{translations[language].footer.communities}</Link>
                            <Link href="https://azizidevelopments.com/en/dubai" className={styles.link}>{translations[language].footer.project}</Link>
                            <Link href="https://azizidevelopments.com/en/retail/dubai" className={styles.link}>{translations[language].footer.retail}</Link>
                            <Link href="https://azizidevelopments.com/en/dubai/construction-updates" className={styles.link}>{translations[language].footer.constructionUpdate}</Link>
                            <Link href="https://azizidevelopments.com/en/walkthrough" className={styles.link}>{translations[language].footer.virtualTour}</Link>
                        </div>
                    </div>
                    <div className={`${styles.linkColumn}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                        <span  className={`${styles.linkColumnHeading}`}>{translations[language].footer.digitalServices}</span>
                        <div className={`${styles.links}`}>
                            <Link href="https://azizidevelopments.com/en/exclusive-offers" className={styles.link}>{translations[language].footer.offer}</Link>
                            <a href="/Brochure/Handover-Procedure.pdf" download="Handover-procedure.pdf" className={styles.link}>{translations[language].footer.handoverProcedure}</a>
                            <Link href="https://azizidevelopments.com/en/online-payments" className={styles.link}>{translations[language].footer.payonline}</Link>
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
                                            placeholder='My email is'
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
            <div className={`${styles.footerFooter}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                <span className={`${styles.privacySpan}`}><Link href="https://azizidevelopments.com/en/sitemap" className={styles.PrivacyLink}>{translations[language].footer.sitemap}</Link> . <Link href="https://azizidevelopments.com/en/privacy" className={styles.PrivacyLink}>{translations[language].footer.privacyPolicy}</Link></span>
                <span className={`${styles.copySpan}`}>{translations[language].footer.copyWrite}</span>
            </div>
        </footer>
    )
}
