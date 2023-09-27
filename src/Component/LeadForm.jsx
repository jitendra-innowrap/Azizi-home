'use client'
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import styles from '@/app/page.module.css'
import '@/app/globals.css'
import React, { useEffect, useState } from 'react';
import PhoneInput, { isValidPhoneNumber , formatPhoneNumber } from 'react-phone-number-input'
import countryData from 'country-data';
import useDownloader from "react-use-downloader";

import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import queryString from 'query-string';
import { useRouter } from "next/navigation";

export default function LeadForm({ isArabic, isTitle, cta, fileName, filePath }) {
    const { download } = useDownloader();
    const [subTitle, setSubTitle] = useState('');
    const subTitleClass = isArabic ? 'subTitleRight' : '';
    const errorClass = isArabic ? 'errorRight' : '';
    const submitBtnClass = isArabic ? 'submitBtnRight' : '';
    const inputContainerClass = isArabic ? 'inputContainerRight' : '';
    const phoneCountryCodeClass = isArabic ? 'phoneCountryCodeRight' : '';
    const router = useRouter()

    // State to track whether to show the country code
    const [showCountryCode, setShowCountryCode] = useState(true);
    const [countryCode, setCountryCode] = useState('+971');

    // Update subTitle when isArabic changes
    useEffect(() => {
        setSubTitle(isArabic ? 'سجّل اهتمامك' : 'REGISTER YOUR INTEREST');
    }, [isArabic]);
    const [formData, setFormData] = useState({
        oid: '00D1t000000utRQ',
        name: '',
        retURL: 'http://azizidevelopments.com',
        email: '',
        phone: '',
        leadSource: 'Website',
        gclid: '',
        company: 'N/A',
        title: 'N/A'
    });

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const searchParams = useSearchParams()
    useEffect(() => {
        const gclid = searchParams.get('gclid')
        setFormData({ ...formData, gclid: gclid });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

         // Real-time validation for each field
         if (name === 'name') {
            if (!value) {
            setNameError(true);
            } else {
            setNameError(false);
            }
        } else if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.match(emailPattern)) {
            setEmailError(true);
            } else {
            setEmailError(false);
            }
        } 
    };

    // Use useEffect to display the country code when the page loads
    useEffect(() => {
        if (formData.phone) {
        setShowCountryCode(true);
        }
    }, []);


    const handlePhoneChange = (value) => {
        // For the phone input, use this callback to update the phone field in formData
        setFormData({ ...formData, phone: value });

            if (value !== null && value !== undefined) {
                const number = formatPhoneNumber(value);
                const parts = value.split(number);
                // if (parts.length >= 1) {
                if (parts.length === 2) {
                    const country = parts[0].trim();
                    setCountryCode(country);
    
                    // Show the country code if the user has entered at least one digit
                    setShowCountryCode(country.length > 0);
                } else {
                    // Hide the country code if the phone number is empty or incomplete
                    setShowCountryCode(false);
                }
            }

          if (value && !isValidPhoneNumber(value)) {
            setPhoneError(true);
          } else if  (!value){
            setPhoneError(true);
          }else {
                setPhoneError(false);
            }
    };

    const handleFlagChange = (newCountry) => {
        // Determine the default country code based on the selected country
        const countryInfo = countryData.countries[newCountry];
        const newDefaultCountryCode = `${countryInfo.countryCallingCodes[0]}`;

        // Set the country code with the '+' sign
        setCountryCode(newDefaultCountryCode);

        // Reset the display of the country code when the flag changes
        setShowCountryCode(true);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        // Reset previous validation errors
        setNameError('');
        setEmailError('');
        setPhoneError('');

        let isValid = true;

        // Name validation
        if (!formData.name) {
        setNameError(true);
        isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.match(emailPattern)) {
        setEmailError(true);
        isValid = false;
        }

         // Phone number validation
        if (!isValidPhoneNumber(formData.phone)) {
            setPhoneError(true);
            isValid = false;
        }

        if (isValid) {   
            const { oid, retURL, name: firstName, name: lastName, company, title, email, phone, leadSource, } = formData
            console.log(oid, retURL, firstName, lastName, company, title, email, phone, leadSource,)
            // trying to get lead submit by method 2

            await fetch(
                `https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=${oid}&retURL=${retURL}&first_name=${firstName}&last_name=${lastName}&company=${company}&title=${title}&email=${email}&mobile=${phone}&lead_source=${leadSource}`,
                {
                    method: 'POST',
                    mode: 'no-cors', // Set the mode to 'no-cors'
                }
            ).then((response) => { const res = response.text(); console.log('success', res) })
                .then((result) => console.log('submitted', result))
                .catch((error) => console.log('error', error));

            router.push('/thank-you');
        }
    };

    const handleDownload = async (event) => {
        event.preventDefault();

        // Reset previous validation errors
        setNameError('');
        setEmailError('');
        setPhoneError('');

        let isValid = true;

        // Name validation
        if (!formData.name) {
            setNameError(true);
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.match(emailPattern)) {
            setEmailError(true);
            isValid = false;
        }

        // Phone number validation
        if (!isValidPhoneNumber(formData.phone)) {
            setPhoneError(true);
            isValid = false;
        }

        if (isValid) {
            const { oid, retURL, name: firstName, name: lastName, company, title, email, phone, leadSource, } = formData
            console.log(oid, retURL, firstName, lastName, company, title, email, phone, leadSource,)
            // trying to get lead submit by method 2

            await fetch(
                `https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=${oid}&retURL=${retURL}&first_name=${firstName}&last_name=${lastName}&company=${company}&title=${title}&email=${email}&mobile=${phone}&lead_source=${leadSource}`,
                {
                    method: 'POST',
                    mode: 'no-cors', // Set the mode to 'no-cors'
                }
            ).then((response) => { const res = response.text(); console.log('success', res) })
                .then((result) => console.log('submitted', result))
                .catch((error) => console.log('error', error));

            download(filePath, fileName)
        }
    };

    return (<>
        {isTitle && <span className={`${styles.subTitle} ${subTitleClass}`}>{isArabic ? 'سجّل اهتمامك' : 'REGISTER YOUR INTEREST'}</span>}
        <form className={styles.form} >
            <div className={`${styles.inputContainer} ${inputContainerClass}`}>
                <input className={styles.inputAnimated}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder={isArabic ? 'الاسم الكامل' : 'Full Name *'}
                />
                 {nameError && <p className={`${styles.error} ${errorClass}`}>{isArabic ? 'الإسم الكامل ضروري' : 'Full Name is required.'}</p>}
            </div>
            <div className={`${styles.inputContainer} ${inputContainerClass}`}>
                <input className={styles.inputAnimated}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder={isArabic ? 'البريد الإلكتروني' : 'Email *'} 
                />
                {emailError && <p className={`${styles.error} ${errorClass}`}>{isArabic ? 'عنوان البريد الإلكتروني غير صحيح': 'Invalid email address.'}</p>}
            </div>
            <div className={`${styles.inputContainer} ${inputContainerClass}`}>
                <div className={styles.phoneContainer}>
                    {countryCode && <span className={`${styles.phoneCountryCode} ${phoneCountryCodeClass}`}>{countryCode}</span>}
                    <PhoneInput
                        inputProps={{
                            name: 'phone', // Ensure the name attribute matches the state field
                            required: true,
                            id: "phone",
                            className: `${styles.inputAnimated} ${styles.inputPhone}`,
                        }}
                        defaultCountry="AE"
                        placeholder={isArabic ? 'رقم الهاتف' : 'Phone Number *'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        displayInitialValueAsLocalNumber={!showCountryCode} // Hide the country code if showCountryCode is false
                        onCountryChange={handleFlagChange} 
                        />
                </div>
                {phoneError && <p className={`${styles.error} ${errorClass}`}>{isArabic ? 'رقم الهاتف غير صحيح' : 'Invalid phone number.'}</p>}
            </div>
            <div className={styles.submitWrapper}>
                {
                    !cta ?
                        <button className={`${styles.submitBtn} ${submitBtnClass}`}
                            onClick={handleSubmit}>
                            {isArabic ? 'إرسال' : 'SUBMIT'}
                        </button>
                        :
                        <button className={`${styles.submitBtn} ${submitBtnClass}`}
                            onClick={handleDownload}>
                            {cta}
                        </button>
                }
            </div>
        </form>
    </>
    )
}
