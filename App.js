import './App.css';
import './components/styles.css'
import React, { Component, useEffect, useState } from "react";
import Weather from './components/weather';
import MapContainer from './components/MapContainer';


function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long]);


  return (
    <div className="App">
      <div className="tipcontainer">
        <h1 className="title">
          What's the weather like where you are right now?
        </h1>
        <h2 className="subtitle">
          Enable location and see below!
        </h2>
      </div>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ) : (
        <div></div>
      )}
      <div className="mapholder">
        <MapContainer data={data}/>
      </div>
    </div>
  );

}

export default App; 
