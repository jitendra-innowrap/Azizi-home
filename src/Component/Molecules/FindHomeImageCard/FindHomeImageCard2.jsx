'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import homeStyle from '@/app/home/home.module.css'
import Link from 'next/link';


export default function FindHomeImageCard2({ image, title, url }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);


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
        const container = document.querySelector(`#MouseFollowContainer`);
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Clean up the event listener when the component unmounts
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Link href={url}>
            <div className={`${homeStyle.findHomeImageContainer}`}
            id="MouseFollowContainer"
            onMouseEnter={handleContainerHover}
            onMouseLeave={handleContainerLeave}
        >
            <img
                src={image}
                alt="Image"
                width={100}
                height={100}
                className={homeStyle.findHomeImage}
            />
            <span className={`${homeStyle.findHomeImageTilte}`}
            >{title}</span>
            <div className={`${homeStyle.findHomeImageOverlay}`}></div>
            {isVisible && <button className={`${homeStyle.findHomeImageButton}`}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            >
                <Image
                    src="/Assets/Icons/Rectangle-icon.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={homeStyle.exploreIcon}
                />
                EXPLORE
            </button>}
        </div>
        </Link>

    )
}
