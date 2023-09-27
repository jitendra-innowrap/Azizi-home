'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';



const ParallexGridHero = () => {
    const contentRef = useRef(null);

    const handleScroll = () => {
        const element = contentRef.current;
        console.log('Scrolled to the bottom!', element.scrollHeight, element.scrollTop, element.clientHeight);

        // Check if scrolled to the bottom
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // Perform your action when scrolled to the bottom
            console.log('Scrolled to the bottom!');
            // Call your action function or perform the desired action here
            // For example: load more content, fetch more data, etc.
        }
    };
    // useEffect(() => {
    //     const element = contentRef.current;
    //     element.addEventListener('scroll', handleScroll);

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         element.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const triggers = [];
        const stickyElements = document.querySelectorAll(".js-scroll-trigger");
        const headerbar = document.getElementById("header-bar")
        for (let i = 0; i < triggers.length; i++) {
            const trigger = triggers[i];
            trigger && trigger.kill();
        }
        if (stickyElements) {
            for (let i = 0; i < stickyElements.length; i++) {
                const element = stickyElements[i];
                const target = element.querySelector(".js-scroll-trigger-target") || element;
                const start = target.dataset.start || "top bottom";
                const end = target.dataset.end || "bottom top";
                const scrollTrigger = gsap.to(element, {
                    ease: "none",
                    scrollTrigger: {
                        scroller: window,
                        trigger: target,
                        start: start,
                        end: end,
                        scrub: 0.01,
                        onUpdate: ({ progress }) => {
                            if (progress > 0.5) {
                                target.classList.add("_ov");
                            } else {
                                target.classList.remove("_ov");
                            }
                            target.style.setProperty("--p1", progress);
                            target.style.setProperty("--p2", 1 - progress);
                            if (progress > 0.89) {
                                headerbar.classList.add("nav-dark");
                                // headerbar.classList.remove("nav-hide");
                            } else {
                                headerbar.classList.remove("nav-dark");
                                // headerbar.classList.add("nav-hide");
                            }
                            if (progress > 0.2) {
                                headerbar.classList.add("nav-hide");
                            } else {
                                headerbar.classList.remove("nav-hide");
                            }
                        }
                    }
                });

                triggers.push(scrollTrigger);
            }
        }
    }, []);

    return (
        <div className='hero-banner'
            ref={contentRef}
            onScroll={handleScroll}
        >
            <div className="BannerGifWrapper">
                <Image src={'/Assets/banner/Logo-Animation.gif'} quality={100} height={449} width={702} style={{ margin: "auto", display: "block" }} />
            </div>
            <div className="c-hero ">
                <div className="c-hero-sticky js-scroll-trigger" data-start="top top" data-end="bottom+=20% top" style={{ '--p1': 0, '--p2': 1 }}>
                    <div className="c-hero-img js-iv l" data-x="0" data-y="0" data-shown="0" data-visible="1">
                        <div className="c-bg-img js-bg-img is-poster-loaded is-img-loaded" data-assets="true" data-delay="0" data-shown="1" data-visible="1">
                            <div className="poster" style={{ backgroundImage: 'url("/Assets/banner/Image-Left.webp")' }}></div>
                            <div className="elem" style={{ backgroundImage: 'url("/Assets/banner/Image-Left.webp")' }}></div>
                        </div>
                    </div>
                    <div className="c-hero-img js-iv l" data-x="2" data-y="0" data-shown="1" data-visible="1">
                        <div className="c-bg-img js-bg-img is-poster-loaded is-img-loaded" data-assets="true" data-delay="0.3" data-shown="1" data-visible="1">
                            <div className="poster" style={{ backgroundImage: 'url("/Assets/banner/Image-Left.webp")' }}></div>
                            <div className="elem" style={{ backgroundImage: 'url("/Assets/banner/Image-Left.webp")' }}></div>
                        </div>
                    </div>
                    <div className="c-hero-clip js-iv" data-shown="1" data-visible="1">
                        <div className="c-hero-mv">
                            <div className="c-bg-img js-bg-img is-poster-loaded is-img-loaded" data-assets="true" data-delay="0.4" data-shown="1" data-visible="1">
                                <div className="poster">
                                    <video
                                        autoPlay
                                        loop
                                        playsInline
                                        src="/Assets/Home/videos/backgroundGif.mp4"
                                        type="video/mp4"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="elem" style={{ backgroundImage: 'url("/Assets/banner/giphy.git")' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="c-hero-img js-iv r" data-x="3" data-y="0" data-shown="1" data-visible="1">
                        <div className="c-bg-img js-bg-img is-poster-loaded is-img-loaded" data-assets="true" data-delay="0.5" data-shown="1" data-visible="1">
                            <div className="poster" style={{ backgroundImage: 'url("/Assets/banner/Image-Right.webp")' }}></div>
                            <div className="elem" style={{ backgroundImage: 'url("/Assets/banner/Image-Right.webp")' }}></div>
                        </div>
                    </div>
                    <div className="c-hero-img js-iv r" data-x="4" data-y="0" data-shown="1" data-visible="1">
                        <div className="c-bg-img js-bg-img is-poster-loaded is-img-loaded" data-assets="true" data-delay="0.6" data-shown="1" data-visible="1">
                            <div className="poster" style={{ backgroundImage: 'url("/Assets/banner/Image-Right.webp")' }}></div>
                            <div className="elem" style={{ backgroundImage: 'url("/Assets/banner/Image-Right.webp")' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParallexGridHero;

