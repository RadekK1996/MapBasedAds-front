import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import './Map.css';


export const Map = () => {
    return (
        <div className='map'>
            <MapContainer center={[53.0273961,18.5762177]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[53.0262619,18.599789]}>
                    <Popup>
                        <h2>Sklep stokrotka</h2>
                        <p>Zawsze najnizsze ceny</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

