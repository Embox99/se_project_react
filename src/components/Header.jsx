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
          !isLogedIn ? "header__element-hidden" : ""
        }`}
      >
        + Add Clothes
      </button>
      <button
        onClick={handleRegistrationClick}
        type="button"
        className={`header__btn ${isLogedIn ? "header__element-hidden" : ""}`}
      >
        Sign Up
      </button>
      <button
        onClick={handleLoginClick}
        type="button"
        className={`header__btn ${isLogedIn ? "header__element-hidden" : ""}`}
      >
        Log in
      </button>
      <div
        className={`header__user-container ${
          !isLogedIn ? "header__element-hidden" : ""
        }`}
      >
        <Link to="/profile">
          <p className="header__username">Terence Tegegne</p>{" "}
        </Link>
        <img src={avatar} alt="Terence Tagegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
