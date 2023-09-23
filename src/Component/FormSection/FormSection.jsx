import React from 'react'
import styles from './FormSection.module.css'
import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '../LeadForm';

export default function FormSection() {
    return (
        <>
            <section className={`${styles.section}`}>
                <div className={`${styles.container}`}>
                <Image
                    src="/home/form-bg-image.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={`${styles.bgImg}`}
                />
                    <div className={`${styles.titleContainer}`}>
                        <h2 className={`${styles.title}`}>enquire now</h2>
                        <p  className={`${styles.paragraph}`}>Register your interest, schedule a private showing or request a callback by filling out the form.</p>
                    </div>
                    <div className={`${styles.formContainer}`}>
                     <LeadForm  />
                    </div>
                </div>
            </section>
        </>
    );
}