import "../blocks/Header.css";
import logo from "../assets/header-logo.svg";
import ToggleSwitch from "./ToggleSwitch";
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

  const { isLoggedIn, userData } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="header-logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className={`header__add-clothes-btn ${
          !isLoggedIn ? "header__element-hidden" : ""
        }`}
      >
        + Add Clothes
      </button>
      <button
        onClick={handleRegistrationClick}
        type="button"
        className={`header__btn ${isLoggedIn ? "header__element-hidden" : ""}`}
      >
        Sign Up
      </button>
      <button
        onClick={handleLoginClick}
        type="button"
        className={`header__btn ${isLoggedIn ? "header__element-hidden" : ""}`}
      >
        Log in
      </button>
      <div
        className={`header__user-container ${
          !isLoggedIn ? "header__element-hidden" : ""
        }`}
      >
        <Link to="/profile">
          <p className="header__username">{userData.name}</p>{" "}
        </Link>
        {userData?.avatar ? (
          <img src={userData?.avatar} alt="avatar" className="header__avatar" />
        ) : (
          <div className="header__avatar-placeholder">
            {userData?.name?.charAt(0).toUpperCase() || ""}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
