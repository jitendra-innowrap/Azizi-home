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
};
export default function Multislider() {
    const [PopUpValue, setPopUpValue] = useState(1)
    const [open, setOpen] = React.useState(false);
    const handleOpen = (val) => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    return (
        <>

            <div className={styles.mltislider}
            >
                <Surrounding handleOpen={handleOpen} setPopUpValue={setPopUpValue} />
            </div>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <PopUp handleClose={handleClose} PopUpValue={PopUpValue} />
                </Box>
            </Modal>
            
        </>
    )
}
