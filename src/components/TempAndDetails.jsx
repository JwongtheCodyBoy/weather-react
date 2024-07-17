import React from "react";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { TbSunrise, TbSunset } from "react-icons/tb";

function TempAndDetails() {
  const weatherDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Feels like",
      value: "Temp°",
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: "Hum%",
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind speed",
      value: "Wind km",
    },
  ];

  const todayDetails = [
    {
      id: 1,
      Icon: TbSunrise,
      title: "Sunrise",
      value: "Time AM",
    },
    {
      id: 2,
      Icon: TbSunset,
      title: "Sunset",
      value: "Time PM",
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: "Temp°",
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: "Temp°",
    },
  ];

  return (
    <div className="text-white text-xl">
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p> WEATHER </p>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png" //Icon, need to make variable here
          alt="weather icon"
          className="w-20"
        />
        <p className="text-5xl">TEMP°</p>

        <div className="flex flex-col space-y-3 items-start">
          {
            //prettier ignore
            weatherDetails.map(({ id, Icon, title, value }) => (
              <div
                key={id}
                className="flex font-light text-sm items-center justify-center"
              >
                <Icon size={18} className="mr-1" />
                {`${title}:`} <span className="font-medium ml-1">{value}</span>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center text-base py-3">
        {
          //prettier ignore
          todayDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className="flex flex-row items-center text-sm mx-7">
              <Icon size={30} />
              <p className="font-light ml-1">{`${title}:`}</p>
              <span className="font-medium ml-1 text-nowrap">{value}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default TempAndDetails;
