import React, { useState } from "react";
import "./keys";
import Weather from "./Weather"
import Hourly from "./Hourly"
import Weekly from "./Weekly"
import API_KEY from "./keys"
import './App.css';
import { AppBar, Tab, Input, Button, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

function App() {
  const [weather, setWeather] = useState([]);
  const [zipCode, setZipCode] =useState(22904);
  const [city, setCity] =useState("");
  const [weeklyHourly, setWeeklyHourly] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getWeather= () => {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    if (city !== "") {
      url.searchParams.append("q", city);
    } else {
      url.searchParams.append("zip", zipCode);
    }
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("units", "imperial");
    console.log(url)
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((obj) => {
        // also important to check html error codes
        // 200 means no errors
        if (obj.cod === 200) {
          setWeather(obj);
          getHourlyWeekly(obj.coord.lat, obj.coord.lon);
        } else {
          setWeather(false);
        }
      });   
      setCity("");
      setValue("1");
      
  };

  const getHourlyWeekly = (lat, long) => {
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", long);
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("units", "imperial");
    // url.searchParams.append("units", "imperial");
    console.log(url);
    fetch(url)
      .then((resp) => 
        resp.json()
      )
      .then((obj) => {
        setWeeklyHourly(obj);
        console.log(weeklyHourly)
      });
      
  };

  const handleCurrentWeather = (e) => {
    setZipCode(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };


  if (weather.length === 0){
    return (
      <div className="weather-app"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}> 
      <h1>Weather App</h1>
        <span><Input type="number" placeholder="Search by Zip Code" onChange={handleCurrentWeather} />
OR
        <Input  type="text" placeholder="Search by City" onChange={handleCity} /></span>
        <Button onClick={getWeather}>Get Weather!</Button>
      </div>
    )
  }
  return (
    <div className="weather1-app" style={{ textAlign: "center" }}>
      <span><Input placeholder="Search by ZipCode" type="number" onChange={handleCurrentWeather} />
      <IconButton onClick={getWeather}>
            <SearchIcon/>
        </IconButton> 
      <Input type="text" placeholder="Search by City" onChange={handleCity} ></Input>
      <IconButton onClick={getWeather}>
            <SearchIcon/>
        </IconButton></span>
      
       <TabContext value={value}>
  <AppBar position="static">
    <TabList variant="fullWidth" onChange={handleChange} aria-label="simple tabs example">
      <Tab label="Current Weather" value="1" />
      <Tab label="Hourly" value="2" />
      <Tab label="Weekly" value="3" />
    </TabList>
  </AppBar>
  <TabPanel value="1">
  <Weather
          weather={weather}
        /></TabPanel>
  <TabPanel value="2"> 
  <Hourly
          current={weeklyHourly}
          weather={weather}
        />
        </TabPanel>
  <TabPanel value="3">
  <Weekly
          current2={weeklyHourly}
          weather={weather}
        />
    </TabPanel>
</TabContext>

    </div>
  );
}
export default App;