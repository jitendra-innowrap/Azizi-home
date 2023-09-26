import React from 'react'
import homeStyle from '@/app/home.module.css'
import OasisDreamCarousel from '@/Component/OasisDreamCarousel'
import Image from 'next/image'
export default function OasisOfDreams() {
    return (
        <>
            <section className={`${homeStyle.oasisDreamTitleSection}`}>
                <h1 className={`${homeStyle.mainTitle} ${homeStyle.oasisDreamTitle}`}>AN OASIS OF DREAMS</h1>
                <p className={`${homeStyle.mainParagraph} ${homeStyle.oasisDreamParagraph}`}>Dive into a world of unparalleled water-inspired living, unlike anything you&#39;ve ever experienced, at Dubai&#39;s forthcoming legacy - a truly unparalleled luxury Crystal Lagoon community. Brace yourself to embark on a journey where opulence knows no boundaries, as you step into a haven of lavishness that stretches the limits of imagination. This is not just another destination it&#39;s an uncharted masterpiece, waiting to be discovered.</p>
            </section>
            <section className={`${homeStyle.oasisDreamContainSection}`}>
                <div className={`${homeStyle.oasisDreamContainContainer}`}>
                    <div className={`${homeStyle.column7} ${homeStyle.sliderSection}`}>
                        <OasisDreamCarousel />
                    </div>
                    <div className={`${homeStyle.categorySection} ${homeStyle.column5}`}>
                        <div className={`${homeStyle.categoryDivDiv}`}>
                            <div className={`${homeStyle.categoryboxs} ${homeStyle.categorySectionWidth}`}>
                                <div className={homeStyle.categorybox}>
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
                            <div className={`${homeStyle.categoryboxs} ${homeStyle.categorySectionWidth}`}>
                                <div className={homeStyle.categorybox}>
                                    <Image
                                        src="/Assets/Home/images/masterplan/Retail.png"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.oasisDreamContainImages}
                                    />
                                    <div className={homeStyle.categoryContain}>
                                        <span>1.5</span>
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
                            <div className={`${homeStyle.categoryboxs} ${homeStyle.categorySectionWidth}`}>
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
                            <div className={`${homeStyle.categoryButtons} ${homeStyle.categorySectionWidth}`}>
                                <button className={homeStyle.categoryButton}>
                                    <Image
                                        src="/Assets/Home/svgs/Shaee-icon.svg"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.categoryButtonIcon}
                                    />
                                    SHARE
                                </button>
                                <a href="/Brochure/Azizi-Venice-Brochure.pdf" className='DownloadBTN' download="Brochure.pdf">
                                    <button className={homeStyle.categoryButton}>
                                    <Image
                                        src="/Assets/Home/svgs/Download-icon.svg"
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className={homeStyle.categoryButtonIcon}
                                    />
                                    DOWNLOAD BROCHURE
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
