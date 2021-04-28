import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import Box from '@material-ui/core/Box';
export default function Weather ({weather}) {


 const cloudy = {
    icon: 'CLOUDY',
    color: 'grey',
    size: 80,
    animate: true
  };

  const clear = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 90,
    animate: true
  };
  

const icon = (type) => {
    console.log(type)
    if (type==="Cloudy"){
    return (
         <ReactAnimatedWeather
    icon={cloudy.icon}
    color={cloudy.color}
    size={cloudy.size}
    animate={cloudy.animate}
  />
      );}
      if (type==="Clear"){
        return ( 
             <ReactAnimatedWeather
        icon={clear.icon}
        color={clear.color}
        size={clear.size}
        animate={clear.animate}
      />
          );}
}

    return (
        <div><Box  border={1} style={{marginTop: 20, }}height={510} width={400} bgcolor="white" borderRadius={16} boxShadow={3} >
            <span>
            <h1 style={{marginTop:20}}> {(JSON.stringify(weather.name, undefined, 4)).replace(/^"(.*)"$/, '$1')}</h1></span>
            <h1>{(JSON.stringify(weather.main.temp, undefined, 4)).replace(/^"(.*)"$/, '$1')}°</h1>
            <h4><div><span style={{marginRight: 20, marginBottom:10}}>{(JSON.stringify(weather.main.temp_min, undefined, 4)).replace(/^"(.*)"$/, '$1')}° </span><span style={{marginLeft: 20}}>{(JSON.stringify(weather.main.temp_max, undefined, 4)).replace(/^"(.*)"$/, '$1')}°</span></div></h4>
            {icon(((weather.weather)[0]).main)}
            <h2 style={{fontSize: 27}}>{(JSON.stringify(((weather.weather)[0]).main, undefined, 4)).replace(/^"(.*)"$/, '$1')}</h2>
            <h3 style={{fontSize: 17}}>Feels Like: {(JSON.stringify(weather.main.feels_like, undefined, 4)).replace(/^"(.*)"$/, '$1')}°</h3>
            <h3 style={{fontSize: 17}}>Pressure: {(JSON.stringify(weather.main.pressure, undefined, 4)).replace(/^"(.*)"$/, '$1')}</h3>
            <h3 style={{fontSize: 17}}>Humidity: {(JSON.stringify(weather.main.humidity, undefined, 4)).replace(/^"(.*)"$/, '$1')}°</h3>
            <h3 style={{fontSize: 17}}>Wind Speed: {(JSON.stringify(weather.wind.speed, undefined, 4)).replace(/^"(.*)"$/, '$1')} mph</h3></Box>
        </div>
    );

}