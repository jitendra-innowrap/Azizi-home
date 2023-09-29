'use client'
import React, { useEffect, useState } from 'react'
import styles from './Map.module.css'
import mapColor from '@/app/mapStyles.json'
import Image from 'next/image'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Using @react-google-maps/api library
import GMap from './GMap'
const KEY = process.env.GTM_ID;
console.log(KEY);
// Define custom map styles
const mapStyles = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde3df"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7eb7c1"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
]
const markers = [
    {
        id: 1,
        name: "Al Maktoum International Airport",
        position: { lat: 24.890392862046706, lag: 55.158111965412 }
    },
    {
        id: 2,
        name: "Azizi Venice",
        position: { lat: 24.842354939624123, lng: 55.14311858048023 }
    }
];
// load google map script
const loadGoogleMapScript = (callback) => {
    if (
        typeof window.google === 'object' &&
        typeof window.google.maps === 'object'
    ) {
        callback();
    } else {
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${'AIzaSyBcSjfsa1ggrx1M-ZIne3Lsn1H47rNT63g'}`;
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


