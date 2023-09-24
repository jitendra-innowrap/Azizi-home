'use client'
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function ThankYou({ delayTime, redirectTo })  {
    const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(redirectTo);
    }, delayTime);

    return () => clearTimeout(timer);
  }, [delayTime, redirectTo]);
  
    return null; // This component doesn't render anything
}