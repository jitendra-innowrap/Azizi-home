import SectionsTitle from '@/Component/Molecules/SectionTitle/SectionTitle'
import React from 'react'
import Styles from './Lifestyle.module.css'
import Image from 'next/image';
import RightAnimation from '@/Component/RightAnimation/RightAnimation';

export default function Lifestyle({ title, para, listItem , image, imageTitle}) {
    console.log(listItem)
    return (
        <section className={Styles.section}>
            <RightAnimation />
            <SectionsTitle title={title} para={para} />
            <div className={Styles.imageSection}>
                <div className={Styles.imageContainer}>
                    <Image
                        src={image}
                        alt="Image"
                        // width={1000}
                        // height={1000}
                        // quality={100}
                        // priority
                        layout="fill"
                        objectFit="cover"
                        className={Styles.image}
                    />
                    <div className={Styles.overlay}></div>
                    <span className={Styles.title}>{imageTitle}</span>
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
