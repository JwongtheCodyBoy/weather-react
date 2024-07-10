import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function SearchBar() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="text-x1 font-light p-2 w-full shadpw-x1 focus:outline-none capitalize"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="celsius"
          className="text-white text-xl font font-light transition ease-out hover:scale-110"
        >
          C°
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="fahrenheit"
          className="text-white text-xl font font-light transition ease-out hover:scale-110"
        >
          F°
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
