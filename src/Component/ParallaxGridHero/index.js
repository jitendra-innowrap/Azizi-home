'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import VideoPopUp from '../Molecules/VideoPopUp/VideoPopUp';
// import { useMediaQuery } from 'react-responsive'


const ParallexGridHero = (headerbar) => {
    const heroRef = useRef(null);
    const videoEl = useRef(null);

    // const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' })
    const handleScroll = (headerbar) => {
        const viewportBottom = window.scrollY + window.innerHeight;
        const heroBottom = heroRef.current.offsetTop + heroRef.current.clientHeight;

        if (viewportBottom >= heroBottom) {
            headerbar.classList.add("nav-dark");
        } else {
            headerbar.classList.remove("nav-dark");
        }
    };

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // document.querySelectorAll("html")[0].classList.add('is-inner-scroll');
        const triggers = [];
        const stickyElements = document.querySelectorAll(".js-scroll-trigger");
        const headerbar = document.getElementById("header-bar")

        // Add the scroll event listener
        window.addEventListener('scroll', () => { handleScroll(headerbar) });

        for (let i = 0; i < triggers.length; i++) {
            const trigger = triggers[i];
            trigger && trigger.kill();
        }
        if (stickyElements) {
            for (let i = 0; i < stickyElements.length; i++) {
                const element = stickyElements[i];
                const target = element.querySelector("body") || element;
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
                                attemptPlay();
                            } else {
                                videoEl.current.pause();
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

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div className='hero-banner-body' suppressHydrationWarning={false}>
            <div className='hero-banner'
                ref={heroRef}
            >
                <div className="BannerGifWrapper">
                    <Image src={'/Assets/banner/Logo-Animation.gif'} quality={100} height={449} width={702} style={{ margin: "auto", display: "block" }} />
                </div>
                <div className="c-hero ">
                    <div className="c-hero-sticky js-scroll-trigger" data-start="top top" data-end="bottom+=20% top" style={{ '--p1': 0, '--p2': 1 }}>
                        {/* <div className="c-hero-img js-iv l" data-x="0" data-y="0" data-shown="0" data-visible="1">
                            <div className="c-bg-img js-bg-img is-poster-loaded is-img-loaded" data-assets="true" data-delay="0" data-shown="1" data-visible="1">
                                <div className="poster" style={{ backgroundImage: 'url("/Assets/banner/Image-Left.webp")' }}></div>
                                <div className="elem" style={{ backgroundImage: 'url("/Assets/banner/Image-Left.webp")' }}></div>
                            </div>
                        </div> */}
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
                                        <video ref={videoEl}
                                            poster='/Assets/Home/videos/video-poster.jpeg'
                                            loop
                                            autoPlay
                                            playsInline
                                            muted
                                            src="https://azizi-assets.fra1.cdn.digitaloceanspaces.com/Venice_15s.mp4"
                                            type="video/mp4"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                                <div className="explore-cta" style={{ zIndex: '1', position: 'relative' }}>
                                    <VideoPopUp />
                                </div>
                            </div>
                        </div>
                        <div className="c-hero-img js-iv r" data-x="3" data-y="0" data-shown="1" data-visible="1">
                            <div className="c-bg-img js-bg-img is-poster-loaded is-img-loaded" data-assets="true" data-delay="0.5" data-shown="1" data-visible="1">
                                <div className="poster" style={{ backgroundImage: 'url("/Assets/banner/Image-Right.webp")' }}></div>
                                <div className="elem" style={{ backgroundImage: 'url("/Assets/banner/Image-Right.webp")' }}></div>
                            </div>
                        </div>
                        {/* <div className="c-hero-img js-iv r" data-x="4" data-y="0" data-shown="1" data-visible="1">
                            <div className="c-bg-img js-bg-img is-poster-loaded is-img-loaded" data-assets="true" data-delay="0.6" data-shown="1" data-visible="1">
                                <div className="poster" style={{ backgroundImage: 'url("/Assets/banner/Image-Right.webp")' }}></div>
                                <div className="elem" style={{ backgroundImage: 'url("/Assets/banner/Image-Right.webp")' }}></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParallexGridHero;

