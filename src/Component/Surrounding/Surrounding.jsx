"use client";
import React, { useRef, useState } from 'react'
import surroundingStyle from "./surrounding.module.css"
import { useAnimation, motion, useTransform, useMotionValue, useAnimationFrame, useScroll, useVelocity, useSpring } from 'framer-motion';
import { wrap } from '@motionone/utils';
import DoorStepSliderImage from '@/Component/Molecules/DoorStepSliderImage/DoorStepSliderImage'
import DoorStepSliderText from '@/Component/Molecules/DoorStepSliderText/DoorStepSliderText'

function ParallaxText({ children, baseVelocity }) {

    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
  console.log(scrollVelocity)
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 10
    });
  const velocityFactor = useTransform(smoothVelocity, [0, 100], [0, 5], {
      clamp: false
    });
  
    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
  // const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v + baseVelocity)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 6000);
      // moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
  
    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
      <div className={surroundingStyle.parallax}>
        <motion.div className={surroundingStyle.scroller} style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    );
  }

const Surrounding = ({ handleOpen, setPopUpValue }) => {
  const [baseVelocity1, setBaseVelocity1] = useState(-1);
  const [baseVelocity2, setBaseVelocity2] = useState(1);
  const [baseVelocity3, setBaseVelocity3] = useState(-1);
  const handleRowHover = (row) => {
    if (row == 1) {
      setBaseVelocity1(0)
    } else if (row == 2) {
      setBaseVelocity2(0)
    } else if (row == 3) {
      setBaseVelocity3(0)
    }
  }
  const handleRowLeave = (row) => {
    if (row == 1) {
      setBaseVelocity1(-1)
    } else if (row == 2) {
      setBaseVelocity2(1)
    } else if (row == 3) {
      setBaseVelocity3(-1)
    }
  }
  return (
    <div className={surroundingStyle.multiSliderDiv}
    >
      <div className=""
      >
        <ParallaxText baseVelocity={baseVelocity1}>
          <div className={surroundingStyle.imageWrapped}
            onClick={() => { handleOpen(); setPopUpValue(1) }}
          >
          <DoorStepSliderImage className={surroundingStyle.singleImage} title={'Leisure & ENTERTAINMENT'} url={'/Assets/Home/images/DesireOndoorstep/Leisure - Carousel.png'} />
          <DoorStepSliderText className={surroundingStyle.singleImage} title={'Boulevard'} color={'#B6B78A'} />
          <DoorStepSliderImage className={surroundingStyle.singleImage} title={'RETAIL'} url={'/Assets/Home/images/DesireOndoorstep/Retail - Carousel.png'} />
          <DoorStepSliderImage className={surroundingStyle.singleImage} title={'RESTAURANTS & CAFES'} url={'/Assets/Home/images/DesireOndoorstep/Restaurant - Carousel.png'} />
          <DoorStepSliderImage className={surroundingStyle.singleImage} title={'Luxury Boutiques'} url={'/Assets/Home/images/DesireOndoorstep/Luxury Boutiques - Carousel.png'} />          
            </div>
        </ParallaxText>
      </div>
      <div className=""
      >
        <ParallaxText baseVelocity={baseVelocity2}>
          <div className={surroundingStyle.imageWrapped}
            onClick={() => { handleOpen(); setPopUpValue(2) }}
          >
          <DoorStepSliderImage className={surroundingStyle.singleImage} title={'Arts & culture'} url={'/Assets/Home/images/DesireOndoorstep/Arts Culture - Carousel.png'} />
          <DoorStepSliderText className={surroundingStyle.singleImage} title={'OPERA HOUSE'} color={'#41929E'} />
          <DoorStepSliderImage className={surroundingStyle.singleImage} title={'Thriving cultural district'} url={'/Assets/Home/images/DesireOndoorstep/Cultural District - Carousel.png'} />
          <DoorStepSliderImage className={surroundingStyle.singleImage} title={'First-class performances'} url={'/Assets/Home/images/DesireOndoorstep/Perfomance - Carousel.png'} />
          <DoorStepSliderImage className={surroundingStyle.singleImage} title={'Floating stage'} url={'/Assets/Home/images/DesireOndoorstep/Floating Stage - Carousel.png'} />
            </div>
        </ParallaxText>
      </div>
      <div className=""
        style={{ cursor: 'pointer' }}
      >
        <ParallaxText baseVelocity={baseVelocity3} >
          <div className={surroundingStyle.imageWrapped}
            onClick={() => { handleOpen(); setPopUpValue(3) }}
          >
            <DoorStepSliderImage className={surroundingStyle.singleImage} title={'Private hospital'} url={'/Assets/Home/images/DesireOndoorstep/Hospital - Carousel.png'} />
            <DoorStepSliderText className={surroundingStyle.singleImage} title={'Everyday Amenities'} color={'#175A7E'} />
            <DoorStepSliderImage className={surroundingStyle.singleImage} title={'International schools'} url={'/Assets/Home/images/DesireOndoorstep/School - Carousel.png'} />
            <DoorStepSliderImage className={surroundingStyle.singleImage} title={'Cable car'} url={'/Assets/Home/images/DesireOndoorstep/Cable Car - Carousel.png'} />
            <DoorStepSliderImage className={surroundingStyle.singleImage} title={'Five-star Family hotel'} url={'/Assets/Home/images/DesireOndoorstep/Hotel - Carousel.png'} />
          </div>
        </ParallaxText>
      </div>
    </div>
  )
}

export default Surrounding