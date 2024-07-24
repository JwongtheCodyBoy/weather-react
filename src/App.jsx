import { useState, useEffect } from "react";
import React from "react";
import Topbuttons from "./components/Topbuttons.jsx";
import SearchBar from "./components/SearchBar.jsx";
import TimeandLoc from "./components/TimeandLoc.jsx";
import TempAndDetails from "./components/TempAndDetails.jsx";
import Forecast from "./components/Forecast.jsx";
import getFormattedWeatherData from "./scripts/weatherAPI.js";

const App = () => {
  const [query, setQuery] = useState({ q: "tampa" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
      console.log(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const bgColor = () => {
    if (!weather) return 'from-cyan-700 to to-blue-700 h-fit shadow-xl'
    const threshold = units === 'metric' ? 20 : 60          //if metric threshold = 20 else 60, curremtly changing color because of temp  ugly af change to weather and time
    if (weather.temp <= threshold) return 'from-cyan-700 to to-blue-700 h-fit shadow-xl'
    else return 'from-yellow-600 to-orange-700'
  }

  return (
    <div className= {`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-gray-400 text-white ${bgColor()}`}>
      <Topbuttons setQuery={setQuery}/>
      <SearchBar setQuery={setQuery} setUnits={setUnits}/>

      {weather && (
        <>
          <TimeandLoc weather={weather} />
          <TempAndDetails weather={weather} units={units}/>
          <Forecast title = '3 hour forecast' data = {weather.hourly}/>
          <Forecast title = 'daily forecast' data = {weather.daily}/>
        </>
      )}
    </div>
  );
};

export default App;
