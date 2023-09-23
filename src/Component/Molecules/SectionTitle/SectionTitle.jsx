import React from 'react'
import styles from './SectionsTitle.module.css'
import H1 from '@/Component/Atoms/Heading -1/H1'
export default function SectionsTitle({ title, para }) {
    return (
        <>
            <H1 val={title} />
            <p>{para}</p>
        </>
    )
}
