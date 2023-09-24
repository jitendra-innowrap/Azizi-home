'use client'
import React from 'react'
import styles from './Map.module.css'
import Image from 'next/image'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Using @react-google-maps/api library

// Define custom map styles
const mapStyles = [
    {
        featureType: 'water',
        stylers: [
            { color: '#00aaff' }, // Water color
            { visibility: 'on' },
        ],
    },
    {
        featureType: 'landscape',
        stylers: [
            { color: '#f2f2f2' }, // Landscape color
        ],
    },
    // Add more custom styles here as needed
];

export default function Map() {
    return (
        <div className={styles.map}>
            <Image
                src="/Assets/Home/svgs/Map.svg"
                alt="Image"
                width={100}
                height={100}
                className={styles.mapImg}
            />
            {/* <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={{ lat: 37.7749, lng: -122.4194 }}
                    zoom={14}
                    options={{
                        styles: mapStyles, // Apply custom map styles
                    }}
                >
                    <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
                </GoogleMap>
            </LoadScript> */}
        </div>
    )
}


