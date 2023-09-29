'use client'
import React, { useEffect, useState } from 'react'
import styles from './Map.module.css'
import GMap from './GMap'
const KEY = process.env.GMAP_ID;
// Define custom map styles

// load google map script
const loadGoogleMapScript = (callback) => {
    if (
        typeof window.google === 'object' &&
        typeof window.google.maps === 'object'
    ) {
        callback();
    } else {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${KEY}`;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener('load', callback);
    }
};
export default function Map() {
    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        loadGoogleMapScript(() => {
            setLoadMap(true);
        });
    }, []);

    return (
        <div className={styles.map}>
            {!loadMap ? <div>Loading...</div> : <GMap />}
        </div>
    )
}


// export default function Map() {
//     const center = { lat: 24.915432730714127, lng: 55.08650690177196 }
//     const airport = { lat: 24.890392862046706, lag: 55.158111965412 }
//     const marker = { lat: 24.842354939624123, lng: 55.14311858048023 }
//     const handleMarkerClick = (position) => {
//         window.open(`https://www.google.com/maps/search/?api=1&query=${marker.lat},${marker.lng}`, '_blank');
//     };
//     // const customIcon = {
//     //     url: '/Assets/Icons/BurgerMenu.svg',
//     //     scaledSize: new window.google.maps.Size(50, 50),
//     // };
//     return (
//         <div className={styles.map}>
//             {/* <Image
//                 src="/Assets/Home/svgs/Map.svg"
//                 alt="Image"
//                 width={100}
//                 height={100}
//                 className={styles.mapImg}
//             /> */}
//             <LoadScript googleMapsApiKey={'AIzaSyBcSjfsa1ggrx1M-ZIne3Lsn1H47rNT63g'}>
//                 <GoogleMap
//                     mapContainerStyle={{ width: '100%', height: '100%' }}
//                     // center={{ lat: 24.917311, lng: 55.175599 }}
//                     center={center}
//                     zoom={11.5}
//                     // options={{ mapId: "d62e2ebe3718e976" }}
//                     options={{
//                         styles: mapStyles
//                     }}

//                 >{
//                         markers.map((marker, id) => {
//                             <Marker key={id} position={marker.position} onClick={() => { handleMarkerClick(marker.position) }} />
//                         })
//                     }
//                 </GoogleMap>
//             </LoadScript>
//         </div>
//     )
//     // 24.842354939624123, 55.14311858048023
//     // 24.915432730714127, 55.08650690177196
// }


