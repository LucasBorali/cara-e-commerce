import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import mapIcon from '../../Assets/map-icon.png'

const Map = () => {

  const customIcon = L.icon({
    iconUrl: mapIcon,
    iconSize: [30, 30],
    iconAnchor: [15, 30], 
  })
  return (
    <MapContainer
      center={[40.7128, -74.0060]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      <Marker position={[40.7128, -74.0060]} icon={customIcon}/>
    </MapContainer>
  );
};

export default Map;
