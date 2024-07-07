import "../blocks/Header.css";
import logo from "../assets/header-logo.svg";
import avatar from "../assets/user-avatar.svg";

function Header({ handleAddClick }) {
  return (
    <header className="header">
      <img src={logo} alt="header-logo" className="header__logo" />
      <p className="header__date-and-location">Date, Location</p>
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
