import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import GoogleMapReact from 'google-map-react';
import "../styles/home.scss";

const Marker = ({ lat, lng }) => (
  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'red', position: 'absolute', transform: 'translate(-50%, -50%)' }}></div>
);

const HomePage = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setMapCenter(currentPosition);
          setMarkerPosition(currentPosition);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleMarkerMove = ({ lat, lng }) => {
    setMarkerPosition({ lat, lng });
  };

  const handleButtonClick = () => {
    if (markerPosition) {
      console.log("Marker position:", markerPosition);
    } else {
      console.log("Nothing");
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBi3c7LyShVNqEXUGmA-zcuToSLi8o12GU' }}
          center={mapCenter}
          defaultZoom={15}
          onChildMouseMove={handleMarkerMove}
        >
          <Marker lat={markerPosition ? markerPosition.lat : mapCenter.lat} lng={markerPosition ? markerPosition.lng : mapCenter.lng} />
        </GoogleMapReact>
        <button onClick={handleButtonClick}>Log Marker Location</button>
      </div>
    </div>
  );
};

export default HomePage;
