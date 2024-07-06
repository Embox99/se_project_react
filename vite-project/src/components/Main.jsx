import WeatherCard from "./WeatherCard";
import "../blocks/Main.css";
import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard.jsx";

function Main({ weatherData }) {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 75° F / You may want to wear:</p>
        <ul className="cards__list">
          {defaultClothingItems
            /*.filter((item) => {
              return item.weather === weatherData.type;
            })*/
            .map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
