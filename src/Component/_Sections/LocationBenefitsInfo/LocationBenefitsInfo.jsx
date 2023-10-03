import React from 'react'
import homeStyle from '@/app/home.module.css'
import translations from '@/translations/translations.json';
import useLanguage from '@/hooks/useLanguage';

export default function LocationBenefitsInfo() {
    const { language, changeLanguage } = useLanguage();
    return (
        <div>
             <div className={`${homeStyle.locationInfo}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                <span className={`${homeStyle.locationInfoTitle}`}>{translations[language].home.destination1}</span>
                {/* <p className={`${homeStyle.locationInfoDistance}`}>5 min drive</p> */}
            </div>
            <div className={`${homeStyle.locationInfo}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                <span className={`${homeStyle.locationInfoTitle}`}>{translations[language].home.destination2}</span>
                <p className={`${homeStyle.locationInfoDistance}`}>{translations[language].home.destinationV2}</p>
            </div>
            <div className={`${homeStyle.locationInfo}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                <span className={`${homeStyle.locationInfoTitle}`}>{translations[language].home.destination3}</span>
                <p className={`${homeStyle.locationInfoDistance}`}>{translations[language].home.destinationV3}</p>
            </div>
            <div className={`${homeStyle.locationInfo}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                <span className={`${homeStyle.locationInfoTitle}`}>{translations[language].home.destination4}</span>
                <p className={`${homeStyle.locationInfoDistance}`}>{translations[language].home.destinationV4}</p>
            </div>
            <div className={`${homeStyle.locationInfo}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                <span className={`${homeStyle.locationInfoTitle}`}>{translations[language].home.destination5}</span>
                <p className={`${homeStyle.locationInfoDistance}`}>{translations[language].home.destinationV5}</p>
            </div>
            <div className={`${homeStyle.locationInfo}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                <span className={`${homeStyle.locationInfoTitle}`}>{translations[language].home.destination6}</span>
                <p className={`${homeStyle.locationInfoDistance}`}>{translations[language].home.destination1V6}</p>
            </div>
            <div className={`${homeStyle.locationInfo}`} style={{textAlign:`${language=='ar'? 'right':''}`}}>
                <span className={`${homeStyle.locationInfoTitle}`}>{translations[language].home.destination7}</span>
                <p className={`${homeStyle.locationInfoDistance}`}>{translations[language].home.destinationV7}</p>
            </div>
        </div>
    )
}
