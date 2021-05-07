import React from 'react';
import './styles.css'
import moment from 'moment';

const Weather = ({weatherData}) => (
<container className="exterior">  
    <div className="main">

      <p className="header">Currently, in {weatherData.name}</p>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, {moment().format('LL')}</p>
        <p className="description">{Math.floor(weatherData.main.temp)} &deg;F, {weatherData.weather[0].description}</p>
      </div>
      <div className="flex">
        <p className="sun">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="feelslike">Feels Like: {Math.floor(weatherData.main.feels_like)}</p>
      </div>
      <div className="flex">
        <p className="sun">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="humidity">Humidity: {weatherData.main.humidity} %</p>
      </div>
  </div>
</container>

)

export default Weather;