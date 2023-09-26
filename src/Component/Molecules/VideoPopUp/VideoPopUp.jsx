'use client'
import React, { useEffect, useRef, useState } from 'react'
import Styles from './VideoPopUp.module.css'
import { Box, Modal } from '@mui/material'
import Image from 'next/image';
const style = {
    position: 'absolute',
    z: 10,
    top: '10%',
    left: '50%',
    width: '50vw',
    height: '',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    backGround: '#fff'
    // p: 4,
};
export default function VideoPopUp() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    return (
        <>
            <button className={Styles.playBtn}
                onClick={handleOpen}
            >
                <Image
                    src="/Assets/Home/svgs/mdi_play_icon.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={Styles.playSvg}
                />
                EXPLORE MORE
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <VideoPopUpContainer handleClose={handleClose} />
                </Box>
            </Modal>
        </>
    )
}


export function VideoPopUpContainer({ handleClose }) {
    const myDivRef = useRef(null);

    const videoRef = useRef(null);
    useEffect(() => {
        // Ensure the video is muted (autoplay requires muting)
        videoRef.current.muted = true;

        // Start the video
        videoRef.current.play().catch(error => {
            // Handle any play errors, e.g., related to autoplay restrictions
            console.error('Video playback error:', error);
        });
    }, []);
    return (
        <>
            <section className={Styles.homeBannerVideo}
                style={{ overflow: 'hidden' }}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    playsInline
                    src="/Assets/Home/videos/backgroundGif.mp4"
                    type="video/mp4"
                    className={Styles.bannerVideo}
                >
                    Your browser does not support the video tag.
                </video>
                <div className={`${Styles.closeBtnContainer}`}>
                    <button className={`${Styles.closeBtn}`}
                        onClick={handleClose}
                    >
                        <Image
                            src="/Assets/Icons/Close.svg"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.closeBtnImage}
                        />
                    </button>
                </div>
                <div className={Styles.videoOverlay}></div>
            </section>
            <div id="myDiv" ref={myDivRef}></div>
        </>
    )
}
