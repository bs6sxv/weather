import React, { useState, useEffect } from "react";
import { WiRain } from "weather-icons-react";
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
import WeatherIcons from 'react-weathericons';
import Box from '@material-ui/core/Box';

export default function Hourly ({current2}) {

    const timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = month + ' ' + date  ;
  return time;
    }


    return (
<div>
            {/* {/* <h1> {(JSON.stringify(current.hourly.map((cur)=>cur.temp), undefined, 4))}</h1> */}
            <div> {current2.daily.map((cur)=> {
                return [
                    <Box m={5}>
                    <span>{timeConverter(cur.dt)}</span>
                    {/* {cur.temp}° */}
                    {cur.weather[0].main} 
                    </Box>
                ]
            })}
            </div> 
        </div>
    );
}