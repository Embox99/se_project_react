import "../blocks/WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../utils/constants";
import React, { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData, temperatureFormat }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.conditions
    );
  });

  let weatherOptionUrl;
  let weatherOptionCondition;

  if (filteredOptions.length === 0) {
    weatherOptionUrl = defaultWeatherOptions[weatherData.isDay ? [0] : [1]].url;
    weatherOptionCondition =
      defaultWeatherOptions[weatherData.isDay ? [0] : [1]].condition;
  } else {
    weatherOptionUrl = filteredOptions[0]?.url;
    weatherOptionCondition = filteredOptions[0]?.condition;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temperatureFormat}° {currentTemperatureUnit}
      </p>
      <img
        src={weatherOptionUrl}
        alt={weatherOptionCondition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
