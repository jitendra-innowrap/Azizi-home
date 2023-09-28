import React, { useState } from 'react'
import homeStyle from '@/app/home.module.css'
import styles from './CTAPopUp.module.css';
import Image from 'next/image'
import { Box, Button, Modal } from '@mui/material';
import LeadForm from '@/Component/LeadForm';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

export default function CTAPopUp({ cta, fileName, filePath, }) {
    const [open, setOpen] = useState(false);
    const handleOpen = (val) => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        // width: '50%',
        // height: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        // boxShadow: 24,
        // p: 4,
        // m: 4
    };
    return (
        <>
            {/* <a href="/Brochure/Azizi-Venice-Brochure.pdf" className='DownloadBTN' download="Brochure.pdf"> */}
            {filePath ? 
            <button className={homeStyle.categoryButton} onClick={handleOpen}>
                <Image
                    src="/Assets/Home/svgs/Download-icon.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={homeStyle.categoryButtonIcon}
                />
                {cta}
                </button> :
                <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0 }} onClick={handleOpen}></div>
            }
            {/* </a> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CTAPopUpCotainer handleClose={handleClose} fileName={fileName} filePath={filePath} />
                </Box>
            </Modal>
        </>
    )
}


export function CTAPopUpCotainer({ handleClose, fileName, filePath }) {
    return (
        <section className={`${styles.section}`} id="home_form">
            <div className={`${styles.container}`}>
                <img
                    src="/Assets/Home/images/FindYourHome/Enquire.webp"
                    alt="Image"
                    width={100}
                    height={100}
                    quality={100}
                    className={`${styles.bgImg}`}
                />
                <div className={`${styles.titleContainer}`}>
                    <h2 className={`${styles.title}`}>enquire now</h2>
                    <p className={`${styles.paragraph}`}>Register your interest, schedule a private showing or request a callback by filling out the form.</p>
                </div>
                <div className={`${styles.formContainer}`}>
                    <LeadForm cta={'Download'} fileName={fileName} filePath={filePath} />
                </div>
                <AiOutlineClose style={{ color: '#fff' }} className={styles.closeBtn} onClick={
                    handleClose
                } />
            </div>
        </section>
    )
}
