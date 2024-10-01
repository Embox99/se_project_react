import "../blocks/Sidebar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";

function SideBar({ handleEditProfileClick, handleLogOut }) {
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const handleLogOutClick = () => {
    handleLogOut();
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebar__profile-info">
        <img
          src={currentUser.userData.avatar}
          alt="profile__avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser.userData.name}</p>
      </div>
      <button
        type="button"
        className="sidebar__edit"
        onClick={handleEditProfileClick}
      >
        Change profile data
      </button>
      <button
        type="button"
        className="sidebar__logout"
        onClick={handleLogOutClick}
      >
        Log out
      </button>
    </div>
  );
}

export default SideBar;
