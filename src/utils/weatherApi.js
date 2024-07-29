import { checkServerResponce } from "./Api";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkServerResponce);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.weather = {
    temperature: {
      F: Math.round(result.temp.F),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
  };
  result.type = getWeatherType(result.temp.F);
  result.conditions = data.weather[0].main.toLowerCase();
  result.isDay = isDAy(data.sys);
  return result;
};

export const isDAy = ({ sunrise, sunset }) => {
  const now = Date.now() / 1000;
  return sunrise < now && now < sunset;
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature <= 86) {
    return "warm";
  } else {
    return "cold";
  }
};
