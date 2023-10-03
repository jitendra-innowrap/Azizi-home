'use client'
import React from 'react'
import styles from './FormSection.module.css'
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '../LeadForm';
import useLanguage from '@/hooks/useLanguage';
import translations from '@/translations/translations.json';

export default function FormSection() {
    const { language, changeLanguage } = useLanguage();
    return (
        <>
            <section className={`${styles.section}`} id="home_form">
                <div className={`${styles.container}`}>
                    <img
                        src="/Assets/Home/images/FindYourHome/Enquire.webp"
                    alt="Image"
                    width={100}
                    height={100}
                        quality={100}
                    className={`${styles.bgImg}`}
                />
                    <div className={`${styles.titleContainer}`} style={{alignItems:`${language=='ar'? 'end':''}`}}>
                        <h2 className={`${styles.title}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.enquireNow}</h2>
                        <p  className={`${styles.paragraph}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.enquireNowInfo}</p>
                    </div>
                    <div className={`${styles.formContainer}`} style={{alignItems:`${language=='ar'? 'end':''}`}}>
                     <LeadForm  />
                    </div>
                </div>
            </section>
        </>
    );
}