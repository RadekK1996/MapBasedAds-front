import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const defaultIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,41],
});


const hoverIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: iconShadow,
    iconSize: [35,51], // Zwiększamy rozmiar ikonki na hover
    iconAnchor: [17,51], // Zwiększamy anchor, aby ikonka pozostawała w tym samym miejscu
});

L.Marker.prototype.options.icon = defaultIcon;

export { defaultIcon, hoverIcon };
