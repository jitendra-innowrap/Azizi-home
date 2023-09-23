import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './PopUp.module.css'
import PopUpSlider from '../Sliders/PopUpSlider/PopUpSlider'
import PopUpInfo from '../PopUpSliderInfo/PopUpInfo'
import PopUpInfo2 from '../PopUpSliderInfo1/PopUpInfo1'
import PopUpInfo3 from '../PopUpSliderInfo3/PopUpInfo3'
export default function PopUp({ handleClose, PopUpValue }) {

    return (
        <>
            <div className={styles.container} >
                <div className={styles.carouselContainer}>
                    <PopUpSlider/>
                </div>
                <div className={styles.scrollableSection}>
                    {
                        PopUpValue == 1 ?
                            <PopUpInfo handleClose={handleClose} />
                            : PopUpValue == 2 ?
                                <PopUpInfo2 handleClose={handleClose} />
                                :
                                <PopUpInfo3 handleClose={handleClose} />

                    }
                </div>
                {/* <AiOutlineClose onClick={handleClose} /> */}
            </div>
            <div className={styles.containerMobile} >
                <div className={styles.scrollableSectionMobile}>
                    {
                        PopUpValue == 1 ?
                            <PopUpInfo handleClose={handleClose} />
                            : PopUpValue == 2 ?
                                <PopUpInfo2 handleClose={handleClose} />
                                :
                                <PopUpInfo3 handleClose={handleClose} />

                    }
                </div>
                <div className={styles.carouselContainerMobile}>
                    <PopUpSlider/>
                </div>
            </div>
        </>
        
    )
}
