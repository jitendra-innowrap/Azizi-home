'use client'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useLanguage = () => {
  const [language, setLanguage] = useState('en');    

  useEffect(() => {
    // Check if the language cookie exists
    const savedLanguage = Cookies.get('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    Cookies.set('language', newLanguage, { expires: 365 });
    window.location.reload();
  };

  return { language, changeLanguage , setLanguage};
};

export default useLanguage;
