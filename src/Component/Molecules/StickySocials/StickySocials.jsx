'use client'
import React from 'react'
import homeStyle from '@/app/home/home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import CTAPopUp from '../CTAPopUp/CTAPopUp'
export default function StickySocials() {
    return (
        <div className={homeStyle.socialIcons}>
            <Link href={''} style={{ position: 'relative' }} className={`${homeStyle.socialIcon} ${homeStyle.mailIconBg}`}>
                <Image
                    src="/Assets/Icons/mail_Icon.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={`${homeStyle.socialIconSvg}`}
                />
                <CTAPopUp />
            </Link>
            <Link href="tel:80029494" className={`${homeStyle.socialIcon} ${homeStyle.phoneIconBg}`}>
                <Image
                    src="/Assets/Icons/phone_Icon.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={`${homeStyle.socialIconSvg}`}
                />
            </Link>
            <Link href="https://wa.me/97180029494"  target="_blank" className={`${homeStyle.socialIcon} ${homeStyle.whatsappIconBg}`}>
                <Image
                    src="/Assets/Icons/whatsapp_icon.svg"
                    alt="Image"
                    width={100}
                    height={100}
                    className={`${homeStyle.socialIconSvg}`}
                />
            </Link>
        </div>
    )
}
