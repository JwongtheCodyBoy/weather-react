import React from "react";
import Topbuttons from "./components/Topbuttons.jsx";
import SearchBar from "./components/SearchBar.jsx";
import TimeandLoc from "./components/TimeandLoc.jsx";

const App = () => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Topbuttons />
      <SearchBar />
      
      <TimeandLoc />
    </div>
  );
};

export default App;
