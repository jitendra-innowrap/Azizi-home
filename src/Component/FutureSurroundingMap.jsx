'use client'
import React from 'react';
// import futureSurroundingMapStyle from '../app/futureSurroundingMap.module.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function FutureSurroundingMap()  {

    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 51.5074, // Latitude of your map's center
        lng: -0.1278, // Longitude of your map's center
    };
  return (
    <>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10} // Zoom level
        >
            {/* Add markers or other map components here */}
            <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </>
  );
}
