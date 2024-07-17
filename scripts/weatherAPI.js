const API_KEY = "de9f90ef3c71ac9d3628087d36d76ff5";
const BASE_URL = "https://api.openweathermap.org/data/3.0/";

const getWeatherData = (infoType, searchPrams) => {
  const url = new URL(BASE_URL, +infoType);
  url.search = new URLSearchParams({ ...searchPrams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
