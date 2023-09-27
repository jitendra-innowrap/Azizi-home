'use client'
import homeStyle from '@/app/home.module.css'
import OasisDreamCarousel from '@/Component/OasisDreamCarousel'
import Styles from '@/Component/_Sections/OasisOfDreams/OasisOfDreams.module.css'
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
  } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CTAPopUp from '@/Component/Molecules/CTAPopUp/CTAPopUp'
import LeftAnimation from '@/Component/LeftAnimation/LeftAnimation'
import RightAnimation2 from '@/Component/RightAnimation2/RightAnimation2'

export default function OasisOfDreams() {
    const [isVisible, setIsVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleDocumentClick = () => {
          setIsVisible(false);
          setCopied(false);
        };
    
        if (isVisible) {
          document.addEventListener('click', handleDocumentClick);
        } else {
          document.removeEventListener('click', handleDocumentClick);
        }
    
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, [isVisible]);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    
    const handleCopy = () => {
        setCopied(true);
      };
    

    return (
        <>
            <section className={`${homeStyle.oasisDreamTitleSection}`} id='second-section'>
                <RightAnimation2 />
                <h1 className={`${homeStyle.mainTitle} ${homeStyle.oasisDreamTitle}`}>AN OASIS OF DREAMS</h1>
                <p className={`${homeStyle.mainParagraph} ${homeStyle.oasisDreamParagraph}`}>Dive into a world of unparalleled water-inspired living, unlike anything you&#39;ve ever experienced, at Dubai&#39;s forthcoming legacy - a truly unparalleled luxury Crystal Lagoon community. Brace yourself to embark on a journey where opulence knows no boundaries, as you step into a haven of lavishness that stretches the limits of imagination. This is not just another destination it&#39;s an uncharted masterpiece, waiting to be discovered.</p>
            </section>
            <section className={`${homeStyle.oasisDreamContainSection}`}>
                <LeftAnimation />
                <div className={`${homeStyle.oasisDreamContainContainer}`}>
                    <div className={`${homeStyle.column7} ${homeStyle.sliderSection}`}>
                        <OasisDreamCarousel />
                    </div>
                    <div className={`${homeStyle.categorySection} ${Styles.categorySection} ${homeStyle.column5}`}>
                        <div className={`${homeStyle.categoryDivDiv} ${Styles.categoryDivDiv}`}>
                            <div className={`${homeStyle.categoryboxs} ${Styles.categoryboxs} ${homeStyle.categorySectionWidth}`}>
                                <div className={`${homeStyle.categorybox} ${Styles.categorybox}`} >
                                    <Image
                                        src="/Assets/Home/images/masterplan/Villas.png"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.oasisDreamContainImages}
                                    />
                                    <div className={homeStyle.categoryContain}>
                                        <span>266</span>
                                        <p>Villas</p>
                                    </div>
                                </div>
                                <div className={homeStyle.categorybox}>
                                    <Image
                                        src="/Assets/Home/images/masterplan/Apartments.png"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.oasisDreamContainImages}
                                    />
                                    <div className={homeStyle.categoryContain}>
                                        <span>15,057</span>
                                        <p>Apartments</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${homeStyle.categoryboxs} ${Styles.categoryboxs} ${homeStyle.categorySectionWidth}`}>
                                <div className={homeStyle.categorybox}>
                                    <Image
                                        src="/Assets/Home/images/masterplan/Retail.png"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.oasisDreamContainImages}
                                    />
                                    <div className={homeStyle.categoryContain}>
                                        <span>1.5M</span>
                                        <p>Square Metre of Retail Boulevard</p>
                                    </div>
                                </div>
                                <div className={homeStyle.categorybox}>
                                    <Image
                                        src="/Assets/Home/images/masterplan/Plot Area.png"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.oasisDreamContainImages}
                                    />
                                    <div className={homeStyle.categoryContain}>
                                        <span>136M</span>
                                        <p>Square Metre of Plot Area</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${homeStyle.categoryboxs} ${Styles.categoryboxs} ${homeStyle.categorySectionWidth}`}>
                                <div className={homeStyle.categorybox}>
                                    <Image
                                        src="/Assets/Home/images/masterplan/Opera.png"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.oasisDreamContainImages}
                                    />
                                    <div className={homeStyle.categoryContain}>
                                        <span>1</span>
                                        <p>World-class Opera</p>
                                    </div>
                                </div>
                                <div className={homeStyle.categorybox}>
                                    <Image
                                        src="/Assets/Home/images/masterplan/Water.png"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.oasisDreamContainImages}
                                    />
                                    <div className={homeStyle.categoryContain}>
                                        <span>15,860</span>
                                        <p>Metre of Water Perimeter</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${homeStyle.categoryButtons} ${Styles.categoryboxs} ${homeStyle.categorySectionWidth}`}>
                                <button className={homeStyle.categoryButton} onClick={toggleVisibility}>
                                    <Image
                                        src="/Assets/Home/svgs/Shaee-icon.svg"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.categoryButtonIcon}
                                    />
                                    SHARE
                                </button>
                                <CTAPopUp cta={'DOWNLOAD BROCHURE'} fileName={'Brochure.pdf'} filePath={'/Brochure/Azizi-Venice-Brochure.pdf'} />
                            </div>
                            {isVisible && 
                                <div className={`${Styles.shareListContanier}`}>
                                    <CopyToClipboard className={`${Styles.shareListBox}`} text={'https://azizi-home-demo.vercel.app/home'} url={'https://azizi-home-demo.vercel.app/home'}  onCopy={handleCopy}>
                                        <span><img
                                            src="/Assets/Icons/copy_link.svg"
                                            alt="Image"
                                            className={Styles.shareListIcon}
                                        />
                                        COPY LINK</span>
                                    </CopyToClipboard>
                                    <FacebookShareButton className={`${Styles.shareListBox}`}  url={'https://azizi-home-demo.vercel.app/home'}  quote='Azizi'>
                                        <img
                                            src="/Assets/Icons/Facebook.svg"
                                            alt="Image"
                                            className={Styles.shareListIcon}
                                        />
                                        SHARE ON FACEBOOK
                                    </FacebookShareButton>
                                    <TwitterShareButton className={`${Styles.shareListBox}`}  url={'https://azizi-home-demo.vercel.app/home'} title='Azizi'>
                                        <img
                                            src="/Assets/Icons/twitter-x.svg"
                                            alt="Image"
                                            className={Styles.shareListIcon}
                                        />
                                        SHARE ON TWITTER
                                    </TwitterShareButton>
                                    <LinkedinShareButton className={`${Styles.shareListBox}`}  url={'https://azizi-home-demo.vercel.app/home'} title='Azizi'>
                                        <img
                                            src="/Assets/Icons/Linkedin.svg"
                                            alt="Image"
                                            className={Styles.shareListIcon}
                                        />
                                        SHARE ON LINKEDIN
                                    </LinkedinShareButton>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
