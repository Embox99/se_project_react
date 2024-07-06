import "../blocks/WeatherCard.css";
import cloud from "../assets/Cloud-weather.svg";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp"> 75 gradusov</p>
      <img src={cloud} alt="cloud-image" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
