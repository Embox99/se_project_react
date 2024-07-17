import "../blocks/Header.css";
import logo from "../assets/header-logo.svg";
import avatar from "../assets/user-avatar.svg";
import ToogleSwitch from "./ToogleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="header-logo" className="header__logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToogleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terence Tegegne</p>
        <img src={avatar} alt="Terence Tagegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;