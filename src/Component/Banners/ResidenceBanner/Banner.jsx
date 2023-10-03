'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Styles from './Banner.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Banner({ title, image }) {
    const heroRef = useRef(null);
    const myDivRef = useRef(null);

    const scrollToTop = () => {
        if (myDivRef.current) {
            myDivRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = (headerbar) => {
        const viewportBottom = window.scrollY + window.innerHeight;
        const heroBottom = heroRef.current.offsetTop + heroRef.current.clientHeight;

        if (viewportBottom >= heroBottom) {
            headerbar.classList.add("nav-dark");
        } else {
            headerbar.classList.remove("nav-dark");
        }
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const stickyElements = document.querySelectorAll(".parallax-hero-banner");
        const childElement = document.querySelector('#banner-title');
        const headerbar = document.querySelector("nav")
        window.addEventListener('scroll', () => { handleScroll(headerbar) });
        if (stickyElements) {
            gsap.to("[data-speed]", {
                y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
                ease: "none",
                scrollTrigger: {
                    start: 0,
                    end: "bottom -50%",
                    invalidateOnRefresh: true,
                    scrub: 0,
                    pin: true,
                    onUpdate: ({progress}) => {
                        console.log(progress)
                        if(progress > 0.050){
                            childElement.style.top = `${progress*100}px`
                        }
                        if(progress < 0.049){
                            childElement.style.top = `-${progress*1100}px`
                        }
                    }
                }
            });
            // const childElement = document.querySelector('#banner-title');
            // gsap.to(childElement, {
            //     scrollTrigger: {
            //         trigger: '#main-title',
            //         start: 'top top',
            //         end: 'bottom bottom',
            //         scrub: true,
            //     },
            //     y: 0, // Adjust the amount of translation you want
            // });
        }

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <>
            <section className={`${Styles.homeBannerVideo} parallax-hero-banner`} ref={heroRef}>
                <div className={Styles.breadCrumbs}>
                    <div className={Styles.breadCrumbsBox}>
                        <Link className={Styles.Link} href="/home">Home</Link>
                        <Image
                            src="/Assets/Residence/images/chevron-right.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={Styles.chevronRight}
                        />
                        <Link className={Styles.Link} href="/home">Azizi Venice, Dubai South</Link>
                        <Image
                            src="/Assets/Residence/images/chevron-right.png"
                            alt="Image"
                            width={100}
                            height={100}
                            className={`${Styles.chevronRight} ${Styles.mobileHide}`}
                        />
                        <Link className={`${Styles.Link} ${Styles.mobileHide}`} href="/">{title}</Link>
                    </div>
                </div>
                <div className={Styles.blackBannerContainer}>
                    <h1 className={Styles.titleBlack} data-speed="-1.1" id='main-title'>{title}</h1>
                </div>
                <div className={Styles.bannerImg}>
                    <div className={`${Styles.titleWhite}`} id="banner-title" data-speed="0">{title}</div>
                    <img
                        src={image}
                        alt="Image"
                        // width={100}
                        // height={100}
                        priority
                        quality={100}
                        className={Styles.bannerVideo}
                    />
                    <div className={Styles.videoOverlay}></div>

                </div>
                {/* <button className={Styles.playBtn}
                    onClick={scrollToTop}
                >
                    <Image
                        src="/Assets/Home/svgs/mdi_play_icon.svg"
                        alt="Image"
                        width={100}
                        height={100}
                        className={Styles.playSvg}
                    />
                    EXPLORE MORE
                </button> */}

            </section>
            <div id="myDiv" ref={myDivRef}></div>
        </>
    );
}
