import React from 'react'
import Styles from './SectionsTitle.module.css'
import H1 from '@/Component/Atoms/Heading -1/H1'
export default function SectionsTitle({ title, para }) {
    return (
        <>
            <div className={Styles.container}>
                <H1 val={title} />
                <p className={Styles.desc}>{para}</p>
            </div>
        </>
    )
}
