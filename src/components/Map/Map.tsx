import React, {useContext, useEffect, useState} from "react";
import {SingleAd} from "./SingleAd";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from 'types'
import {defaultIcon, hoverIcon} from "../../utils/fix-map-icon";
import {LeafletMouseEvent} from "leaflet";


import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import './Map.css';



export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {

            try {
                const res = await fetch(`http://localhost:3001/api/ad/search/${search}`);
                const data = await res.json();
                setAds(data);
            } catch (error) {
                console.error('Failed to fetch ads:', error);
            }

        })();
    }, [search]);

    const handleMouseOver = (e: LeafletMouseEvent) => {
        e.target.setIcon(hoverIcon);
    };

    const handleMouseOut = (e: LeafletMouseEvent) => {
        e.target.setIcon(defaultIcon);
    };



    return (
        <div className='map'>
            <MapContainer center={[53.0273961, 18.5762177]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />

                {
                    ads.map(ad => (
                        <Marker
                            key={ad.id}
                            position={[ad.lat, ad.lon]}
                            icon={defaultIcon}
                            eventHandlers={{
                                mouseover: handleMouseOver,
                                mouseout: handleMouseOut,
                            }}
                        >
                            <Popup className='custom-popup'>
                               <SingleAd id={ad.id}></SingleAd>
                            </Popup>
                        </Marker>
                    ))
                }

            </MapContainer>
        </div>
    );
};

