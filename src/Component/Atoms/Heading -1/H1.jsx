import React from 'react'
import styles from './H1.module.css'
export default function H1({ val }) {
    return (
        <h1 className={styles.h1}>{val}</h1>
    )
}
