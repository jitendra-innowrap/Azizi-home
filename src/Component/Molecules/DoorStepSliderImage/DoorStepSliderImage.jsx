'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Styles from './DoorStepSliderImage.module.css'
import homeStyle from '@/app/home/home.module.css'
import translations from '@/translations/translations.json';
import useLanguage from '@/hooks/useLanguage';


export default function DoorStepSliderImage({ url, title, imageHeight, imageWidth }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const MouseFollowContainer = useRef();


    // Update the button's position when the mouse moves
    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({ x, y });
    };
    const handleContainerHover = (e) => {
        setIsVisible(true);
    };
    const handleContainerLeave = (e) => {
        setIsVisible(false);
    };


    useEffect(() => {
        // Add a mousemove event listener to the container when the component mounts
        const container = MouseFollowContainer.current;
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Clean up the event listener when the component unmounts
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const { language, changeLanguage } = useLanguage();

    return (
        <div className={Styles.imageContainer}
            ref={MouseFollowContainer}
            onMouseEnter={handleContainerHover}
            onMouseLeave={handleContainerLeave}
        >
            <img
                src={url}
                alt="Image"
                width={100}
                height={100}
                priority
                quality={100}
                className={Styles.image}
            />
            <span className={Styles.title} style={{textAlign:`${language=='ar'? 'right':''}`}}>{title}</span>
            <div className={Styles.overlay}></div>
        </div>
    )
}

