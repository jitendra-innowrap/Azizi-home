import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './PopUp.module.css'
import PopUpSlider from '../Sliders/PopUpSlider/PopUpSlider'
import PopUpInfo from '../PopUpSliderInfo/PopUpInfo'
export default function PopUp({handleClose}) {
    return (
        <>
            <div className={styles.container} >
                <div className={styles.carouselContainer}>
                    <PopUpSlider/>
                </div>
                <div className={styles.scrollableSection}>
                    <PopUpInfo handleClose={handleClose} />
                </div>
                {/* <AiOutlineClose onClick={handleClose} /> */}
            </div>
            <div className={styles.containerMobile} >
                <div className={styles.scrollableSectionMobile}>
                    <PopUpInfo handleClose={handleClose} />
                </div>
                <div className={styles.carouselContainerMobile}>
                    <PopUpSlider/>
                </div>
            </div>
        </>
        
    )
}
