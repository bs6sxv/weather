import React, { useState, useEffect } from "react";
import { WiRain } from "weather-icons-react";
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
import WeatherIcons from 'react-weathericons';

export default function Weather ({weather}) {

 const symbol = (type) => {
     console.log(type)
     if (type === "Rain") {
     return  (<div>
     <Rain />
   </div>)}
   if (type === "Clear"){
    return (
        
          <WeatherIcons name="cloud" size="2x" />
        
      )}
 }

    return (
        <div>
            <span>
            <h1> {(JSON.stringify(weather.name, undefined, 4)).replace(/^"(.*)"$/, '$1')}</h1></span>
            <h1>{(JSON.stringify(weather.main.temp, undefined, 4)).replace(/^"(.*)"$/, '$1')}°</h1>
            {symbol(JSON.stringify(((weather.weather)[0]).main, undefined, 4))}
            {/* {JSON.stringify(((weather.weather)[0]).main, undefined, 4)} */}
            <h2>{(JSON.stringify(((weather.weather)[0]).main, undefined, 4)).replace(/^"(.*)"$/, '$1')}</h2>
            <h3>Feels Like: {(JSON.stringify(weather.main.feels_like, undefined, 4)).replace(/^"(.*)"$/, '$1')}°</h3>
            <h3>Pressure: {(JSON.stringify(weather.main.pressure, undefined, 4)).replace(/^"(.*)"$/, '$1')}</h3>
            <h3>Humidity: {(JSON.stringify(weather.main.humidity, undefined, 4)).replace(/^"(.*)"$/, '$1')}°</h3>
            {/* <pre>{JSON.stringify(weather, undefined, 4)}</pre> */}
        </div>
    );

}