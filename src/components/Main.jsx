import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import "../blocks/Main.css";
import ItemCard from "./ItemCard.jsx";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp =
    weatherData?.weather?.temperature?.[currentTemperatureUnit] || 999;

  return (
    <main>
      <WeatherCard weatherData={weatherData} temperatureFormat={temp} />
      <section className="cards">
        <p className="cards__text">
          Today is {temp}° {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
