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
                    <Image
                        src="/Assets/Home/images/FindYourHome/Enquire.webp"
                    alt="Image"
                        // width={800}
                        // height={800}
                        // quality={100}
                        layout="fill"
                        objectFit="cover"
                    className={`${styles.bgImg}`}
                />
                    <div className={`${styles.titleContainer}`}>
                        <h2 className={`${styles.title}`}>{translations[language].home.enquireNow}</h2>
                        <p  className={`${styles.paragraph}`}>{translations[language].home.enquireNowInfo}</p>
                    </div>
                    <div className={`${styles.formContainer}`}>
                     <LeadForm  />
                    </div>
                </div>
            </section>
        </>
    );
}