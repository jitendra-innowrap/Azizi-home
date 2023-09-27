'use client'
import Style from '@/Component/RightAnimation2/RightAnimation2.module.css'
import React, { useState, useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player'

export default function RightAnimation() {  
    return (
        <>
            <Player
                autoplay
                loop
                controls={false}
                src="BG-Animation/WaveAnimation.json"
                className={`${Style.BgAnimation}`}
            />
        </>
    )
}
