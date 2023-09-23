import Image from 'next/image'
import React from 'react'

export default function DoorStepSliderImage({ url, title }) {
    return (
        <div>
            <Image src={url} />
        </div>
    )
}
