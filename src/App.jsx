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
    await getFormattedWeatherData({ q: "Tampa" }).then((data) => {
      setWeather(data);
      console.log(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400 text-white">
      <Topbuttons />
      <SearchBar />

      {weather && (
        <>
          <TimeandLoc weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast />
          <Forecast />
        </>
      )}
    </div>
  );
};

export default App;
