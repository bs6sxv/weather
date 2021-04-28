import React from "react";
import Box from '@material-ui/core/Box';
import ReactAnimatedWeather from 'react-animated-weather';
import wind from './wind.png';

export default function Hourly ({current2, weather}) {

    const timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
var months = ['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + ' ' + date  ;
  return time;
    }

    const cloudy = {
        icon: 'CLOUDY',
        color: 'grey',
        size: 45,
        animate: true
      };
    
    
    
      const clear = {
        icon: 'CLEAR_DAY',
        color: 'goldenrod',
        size: 45,
        animate: true
      };
    
      const rain = {
        icon: 'RAIN',
        color: 'blue',
        size: 45,
        animate: true
      };
      
    
    const icon = (type) => {
        console.log(type)
        if (type==="Clouds"){
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
              if (type==="Rain"){
                return (
                     <ReactAnimatedWeather
                icon={rain.icon}
                color={rain.color}
                size={rain.size}
                animate={rain.animate}
              />
                  );}      
    }
    

    return (
<div>
<h1 style={{marginTop:20}}> {(JSON.stringify(weather.name, undefined, 4)).replace(/^"(.*)"$/, '$1')}</h1>
            <div> {current2.daily.map((cur)=> {
                return [
                    <Box m={2.5} display="flex" justifyContent="center" alignItems="center"
                    height={80} width={650} border={1}
                    borderRadius={16} boxShadow={2} bgcolor="white">
                    <Box mr={8}><h4>{timeConverter(cur.dt)}</h4></Box>
                    {/* {cur.temp}° */}
                    <Box mr={5}><span style={{fontSize: 25, fontWeight: "bold"}}> {cur.temp.day}°</span>/ {cur.temp.min}</Box>
                    <Box mr={2}>{icon(cur.weather[0].main)} </Box>
                    <Box mr={5}><h3>{cur.weather[0].main}</h3></Box>
                    <Box mr={1}><img className="photo" src={wind}  /></Box>
                    {cur.wind_speed} mph
                    </Box>
                ]
            })}
            </div> 
        </div>
    );
}