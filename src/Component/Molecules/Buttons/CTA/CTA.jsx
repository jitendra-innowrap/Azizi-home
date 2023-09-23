import React from 'react'

export default function CTA({ text, icon }) {
    return (
        <button className={homeStyle.categoryButton}>
            <Image
                src="/home/Download-icon.svg"
                alt="Image"
                width={100}
                height={100}
                className={homeStyle.categoryButtonIcon}
            />
            {text}
        </button>
    )
}
