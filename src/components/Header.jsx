import "../blocks/Header.css";
import logo from "../assets/header-logo.svg";
import avatar from "../assets/user-avatar.svg";
import ToogleSwitch from "./ToogleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleLoginClick,
  handleRegistrationClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { isLogedIn, userData } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="header-logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToogleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className={`header__add-clothes-btn ${
          !isLogedIn ? "header__button-hidden" : ""
        }`}
      >
        + Add Clothes
      </button>
      <button
        onClick={handleRegistrationClick}
        type="button"
        className={`header_add-clothes-btn ${
          isLogedIn ? "header__button-hidden" : ""
        }`}
      >
        Sign Up
      </button>
      <button
        onClick={handleLoginClick}
        type="button"
        className={`header_add-clothes-btn ${
          isLogedIn ? "header__button-hidden" : ""
        }`}
      >
        Log in
      </button>
      <div className="header__user-container">
        <Link to="/profile">
          <p className="header__username">Terence Tegegne</p>{" "}
        </Link>
        <img src={avatar} alt="Terence Tagegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
