import { DateTime } from "luxon";

const API_KEY = "de9f90ef3c71ac9d3628087d36d76ff5";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const iconURL = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;
// const GetCords = async (city) => {
//   try {
//     const response = await fetch(
//       `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`,
//       { mode: "cors" }
//     );
//     const data = await response.json();
//     const coords = {
//       lat: data[0].lat,
//       lon: data[0].lon,
//     };
//     return coords;
//   } catch (error) {
//     console.error(error);
//   }
// };

//Some old crappy code (this goes in getWeatherData) also change it to async to use this
// const coords = await GetCords(cityName);
// let lon, lat;
// if (coords) {
//   lon = coords.lon;
//   lat = coords.lat;
// }
// url.search = new URLSearchParams({ lat: lat, lon: lon, appid: API_KEY });

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, LLL dd yyyy ' | Local time: ' hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const formatCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    icon: iconURL(icon),
    formattedLocalTime,
    dt,
    timezone,
  };
};

const formatForecastWeather = (secs, offset, data) => {
  //hr
  const hourly = data
    .filter((f) => f.dt > secs)
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      icon: iconURL(f.weather[0].icon),
      date: f.dt_txt,
    }))
    .slice(0, 5);

  //day
  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "ccc"),
      icon: iconURL(f.weather[0].icon),
      date: f.dt_txt,
    }));

  return { hourly, daily };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);

  const { dt, lat, lon, timezone } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
