'use client'
import Style from '@/Component/LeftAnimation2/LeftAnimation2.module.css'
import React, { useState, useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player'

export default function LeftAnimation2() {  
    return (
        <>
            <Player
                autoplay
                loop
                controls={false}
                src="BG-Animation/WaveAnimationLeft.json"
                className={`${Style.BgAnimation}`}
            />
        </>
    )
}
