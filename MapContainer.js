import React, { Component, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './styles.css'

export const MapContainer = () => {
  
  const mapStyles = {        
    height: "75vh",
    width: "100%"};

    const [ currentPosition, setCurrentPosition ] = useState({});
  
    const success = position => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCurrentPosition(currentPosition);
    };
    
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success);
    })

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBlGRB7mRCCaRU4kSwS1qNZn5X_o9oQR3I'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={currentPosition}>
            {currentPosition.lat && 
                (
                    <Marker position={currentPosition}/>
                )
            }
        </GoogleMap>
     </LoadScript>
  )
}
export default MapContainer;

