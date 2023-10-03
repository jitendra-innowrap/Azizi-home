'use client'
import homeStyle from '@/app/home.module.css'
import OasisDreamCarousel from '@/Component/OasisDreamCarousel'
import Styles from '@/Component/_Sections/OasisOfDreams/OasisOfDreams.module.css'
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import translations from '@/translations/translations.json';
import useLanguage from '@/hooks/useLanguage';
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
    const { language, changeLanguage } = useLanguage();
    const shareBtnAR = language=='ar' ? 'shareBtnAR' : '';
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
                <h1 className={`${homeStyle.mainTitle} ${homeStyle.oasisDreamTitle}`}>{translations[language].home.oasisTitle}</h1>
                <p className={`${homeStyle.mainParagraph} ${homeStyle.oasisDreamParagraph}`}>{translations[language].home.oasisPara}</p>
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
                                        <span>{translations[language].home.oasisCategoryNo1}</span>
                                        <p style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.oasisCategoryValue1}</p>
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
                                        <span>{translations[language].home.oasisCategoryNo2}</span>
                                        <p style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.oasisCategoryValue2}</p>
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
                                        <span>{translations[language].home.oasisCategoryNo2}</span>
                                        <p style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.oasisCategoryValue3}</p>
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
                                        <span>{translations[language].home.oasisCategoryNo4}</span>
                                        <p style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.oasisCategoryValue4}</p>
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
                                        <span>{translations[language].home.oasisCategoryNo5}</span>
                                        <p style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.oasisCategoryValue5}</p>
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
                                        <span>{translations[language].home.oasisCategoryNo6}</span>
                                        <p style={{textAlign:`${language=='ar'? 'right':''}`}}>{translations[language].home.oasisCategoryValue6}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${homeStyle.categoryButtons} ${Styles.categoryboxs} ${homeStyle.categorySectionWidth}`} style={{justifyContent:`${language=='ar'? 'end':''}`}}>
                                <button className={homeStyle.categoryButton} onClick={toggleVisibility}>
                                    <Image
                                        src="/Assets/Home/svgs/Shaee-icon.svg"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.categoryButtonIcon}
                                    />
                                    {translations[language].home.SHARE}
                                </button>
                                <CTAPopUp cta={translations[language].home.downloadBrochure} fileName={'Brochure.pdf'} filePath={'/Brochure/Azizi-Venice-Brochure.pdf'} />
                            </div>
                            {isVisible && 
                                <div className={`${Styles.shareListContanier} ${shareBtnAR}`}>
                                    <CopyToClipboard className={`${Styles.shareListBox}`} text={'https://azizi-home-demo.vercel.app/home'} url={'https://azizi-home-demo.vercel.app/home'}  onCopy={handleCopy}>
                                        <span><img
                                            src="/Assets/Icons/copy_link.svg"
                                            alt="Image"
                                            className={Styles.shareListIcon}
                                        />
                                        {translations[language].home.copyLink}</span>
                                    </CopyToClipboard>
                                    <FacebookShareButton className={`${Styles.shareListBox}`}  url={'https://azizi-home-demo.vercel.app/home'}  quote='Azizi'>
                                        <img
                                            src="/Assets/Icons/Facebook.svg"
                                            alt="Image"
                                            className={Styles.shareListIcon}
                                        />
                                        {translations[language].home.shareFacebook}
                                    </FacebookShareButton>
                                    <TwitterShareButton className={`${Styles.shareListBox}`}  url={'https://azizi-home-demo.vercel.app/home'} title='Azizi'>
                                        <img
                                            src="/Assets/Icons/twitter-x.svg"
                                            alt="Image"
                                            className={Styles.shareListIcon}
                                        />
                                        {translations[language].home.shareTwitter}
                                    </TwitterShareButton>
                                    <LinkedinShareButton className={`${Styles.shareListBox}`}  url={'https://azizi-home-demo.vercel.app/home'} title='Azizi'>
                                        <img
                                            src="/Assets/Icons/Linkedin.svg"
                                            alt="Image"
                                            className={Styles.shareListIcon}
                                        />
                                        {translations[language].home.shareLinkedin}
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
