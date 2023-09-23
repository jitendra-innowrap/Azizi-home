import React from 'react'
import styles from './H2.module.css'
export default function H2({ val }) {
    return (
        <h2 className={styles.h2}>{val}</h2>
    )
}
