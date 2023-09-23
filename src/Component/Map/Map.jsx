import React from 'react'
import styles from './Map.module.css'
import Image from 'next/image'
export default function Map() {
    return (
        <div className={styles.map}>
            <Image
                src="/home/svgs/Map.svg"
                alt="Image"
                width={100}
                height={100}
                className={styles.mapImg}
            />
        </div>
    )
}
