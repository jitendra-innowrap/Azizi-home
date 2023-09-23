"use client";
import React, { useRef } from 'react'
import surroundingStyle from "./surrounding.module.css"
import { useAnimation, motion, useTransform, useMotionValue, useAnimationFrame, useScroll, useVelocity, useSpring } from 'framer-motion';
import { wrap } from '@motionone/utils';
import Image from 'next/image';
import DoorStepSliderImage from '@/Component/Molecules/DoorStepSliderImage/DoorStepSliderImage'
import DoorStepSliderText from '@/Component/Molecules/DoorStepSliderText/DoorStepSliderText'
const slidedata = [
  {
    title: 'Leisure & ENTERTAINMENT ',
    url: '/surroudings/Line1/1.png'
  },

  {
    title: 'Leisure & ENTERTAINMENT ',
    color: '##B6B78A'
  },

  {
    title: 'Leisure & ENTERTAINMENT ',
    url: '/surroudings/Line1/1.png'
  },

  {
    title: 'Leisure & ENTERTAINMENT ',
    url: '/surroudings/Line1/1.png'
  }
]
function ParallaxText({ children, baseVelocity = 200 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
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
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 3000);
  
      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
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

const Surrounding = ({ handleOpen }) => {
  const imageWidth = 427;
  const imageHeight = 342;
  return (
    <div className={surroundingStyle.multiSliderDiv}  >
        <ParallaxText baseVelocity={-1}>
        <div className={surroundingStyle.imageWrapped}>
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/1.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/2.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/3.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/4.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/5.png'} />
            </div>
        </ParallaxText>
      <ParallaxText baseVelocity={1}>
        <div className={surroundingStyle.imageWrapped}>
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/1.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/2.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/3.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/4.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line2/5.png'} />
            </div>
        </ParallaxText>
        <ParallaxText baseVelocity={-1}>
        <div className={surroundingStyle.imageWrapped}>
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line3/1.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line3/2.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line3/3.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line3/4.png'} />
          <Image onClick={handleOpen} className={surroundingStyle.singleImage} width={imageWidth} height={imageHeight} alt='' src={'/surroudings/Line3/5.png'} />
            </div>
        </ParallaxText>
    </div>
  )
}

export default Surrounding