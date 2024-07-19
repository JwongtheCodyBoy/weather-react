import React from "react";
import Topbuttons from "./components/Topbuttons.jsx";
import SearchBar from "./components/SearchBar.jsx";
import TimeandLoc from "./components/TimeandLoc.jsx";
import TempAndDetails from "./components/TempAndDetails.jsx";
import Forecast from "./components/Forecast.jsx";
import getFormattedWeatherData from "./scripts/weatherAPI.js";

const App = () => {
  const getWeather = async() => {
    const data = await getFormattedWeatherData({q: "tampa"});
    console.log(data);
  }

  getWeather();

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400 text-white">
      <Topbuttons />
      <SearchBar />
      
      <TimeandLoc />
      <TempAndDetails />
      <Forecast />
      <Forecast />
    </div>
  );
};

export default App;
