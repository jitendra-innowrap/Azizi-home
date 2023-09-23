'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './MultiSlider.module.css'
import { Box, Modal } from '@mui/material'
import PopUp from '@/Component/PopUp/PopUp'
import Surrounding from '@/Component/Surrounding/Surrounding'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
};
export default function Multislider() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>

            <div className={styles.mltislider}
                onClick={handleOpen}
            >
                <Surrounding handleOpen={handleOpen} />
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <PopUp handleClose={handleClose} />
                </Box>
            </Modal>
            
        </>
    )
}
