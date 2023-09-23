import Image from 'next/image'
import React from 'react'
import Styles from './DoorStepSliderImage.module.css'

export default function DoorStepSliderImage({ url, title, imageHeight, imageWidth }) {
    return (
        <div className={Styles.imageContainer}>
            <Image
                src={url}
                alt="Image"
                width={100}
                height={100}
                className={Styles.image}
            />
            <span className={Styles.title}>{title}</span>
            <div className={Styles.overlay}></div>
        </div>
    )
}
