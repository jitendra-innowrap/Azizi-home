import Image from 'next/image'
import React from 'react'
import Styles from './DoorStepSliderText.module.css'

export default function DoorStepSliderText({ color, title, imageHeight, imageWidth }) {
    return (
        <div className={Styles.imageContainer} style={{ backgroundColor: color }}>
            <span className={Styles.title}>{title}</span>
        </div>
    )
}
