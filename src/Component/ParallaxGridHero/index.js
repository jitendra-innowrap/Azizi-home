'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';



const ParallexGridHero = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const triggers = [];
        const stickyElements = document.querySelectorAll(".js-scroll-trigger");

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
                        }
                    }
                });

                triggers.push(scrollTrigger);
            }
        }
    }, []);

    return (
        <div className=''>
            <Image src={'/Assets/banner/Logo-Animation.gif'} quality={100} height={449} width={702} style={{ margin: "auto", display: "block" }} />
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
                                <div className="poster" style={{ backgroundImage: 'url("/Assets/banner/center.jpg")' }}></div>
                                <div className="elem" style={{ backgroundImage: 'url("/Assets/banner/center.jpg")' }}></div>
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

