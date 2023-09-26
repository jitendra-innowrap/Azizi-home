import SectionsTitle from '@/Component/Molecules/SectionTitle/SectionTitle'
import React from 'react'
import Styles from './Lifestyle.module.css'
import Image from 'next/image';

export default function Lifestyle({ para, listItem , image}) {
    console.log(listItem)
    return (
        <section className={Styles.section}>
            <SectionsTitle title={'LIFESTYLE'} para={para} />
            <div className={Styles.imageSection}>
                <div className={Styles.imageContainer}>
                    <img
                        src={image}
                        alt="Image"
                        // width={100}
                        // height={100}
                        // quality={100}
                        priority
                        quality={100}
                        className={Styles.image}
                    />
                    <div className={Styles.overlay}></div>
                    <span className={Styles.title}>Crystal Lagoon</span>
                </div>
            </div>
            <div className={Styles.textSection}>
                {listItem.map((title, index) => (
                    <div className={Styles.box} key={index}>
                        <Image
                            src="/Assets/Residence/images/square.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.square}
                        />
                        <span className={Styles.boxTitle}>{title}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
