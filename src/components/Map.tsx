import React, { useRef } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";

const Map = () => {
  const mapRef = useRef(null);
  const latitude = 20.5937;
  const longitude = 78.9629;

  return (
    <div style={{ textAlign: "center", width: "100%" }}>  
      <h2 style={{ marginBottom: "10px" }}>Camera Locations</h2>  
      <MapContainer
        center={[latitude, longitude]}
        zoom={4}
        ref={mapRef}
        style={{ height: "500px", width: "80vw", margin: "0 auto" }}  
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={new LatLng(28.75976337816566, 77.20792737370667)} />
        <Marker position={new LatLng(22.60351971594809, 88.3179077607902)} />
        <Marker position={new LatLng(17.668862646215214, 83.22954307584803)} />
        <Marker position={new LatLng(13.002229273362557, 77.82804826177423)} />
        <Marker position={new LatLng(18.95700614118243, 72.63530704200188)} />
        <Marker position={new LatLng(17.42005918874754, 78.2716492704985)} />
        <Marker position={new LatLng(17.332897583755972, 79.92862950896858)} />
      </MapContainer>
    </div>
  );
};

export default Map;
