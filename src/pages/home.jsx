import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import "../styles/home.scss";

// Define a custom hook to handle geolocation
const useGeolocation = () => {
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return currentPosition;
};

const HomePage = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const mapRef = useRef(null);

  // Get user's current location using the custom hook
  const currentPosition = useGeolocation();

  useEffect(() => {
    // Set map center to user's current position when available
    setMapCenter(currentPosition);
  }, [currentPosition]);

  const handleMapMove = () => {
    if (mapRef.current) {
      const newMapCenter = mapRef.current.getMap().getCenter().toJSON();
      setMapCenter(newMapCenter);
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <div className="map-container">
          <APIProvider
            apiKey="AIzaSyBi3c7LyShVNqEXUGmA-zcuToSLi8o12GU"
            onLoad={() => handleMapMove()}
          >
            <Map
              defaultZoom={15}
              defaultCenter={mapCenter}
              onViewportChange={() => handleMapMove()}
              className="map"
              ref={mapRef}
            />
          </APIProvider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
