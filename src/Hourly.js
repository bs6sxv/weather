import React, { useState, useEffect } from "react";
import { WiRain } from "weather-icons-react";
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
import WeatherIcons from 'react-weathericons';
import Box from '@material-ui/core/Box';

export default function Hourly ({current}) {

    const timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = " " + hour + ':' + min + "0";
  return time;
    }


    return (
<div>
            {/* {/* <h1> {(JSON.stringify(current.hourly.map((cur)=>cur.temp), undefined, 4))}</h1> */}
            <div> {current.hourly.map((cur)=> {
                return [
                    <Box 
                    display="flex" justifyContent="center" alignItems="center"
                    height={50} width={300} border={1} m={2.5}>
                    <Box mr={5}>{timeConverter(cur.dt)}</Box>
                    {cur.temp}° 
                    {cur.weather[0].main} 
                    </Box>
                ]
            })}
            </div> 
        </div>
    );
}