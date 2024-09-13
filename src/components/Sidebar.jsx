import "../blocks/Sidebar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Sidebar({ handleEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);
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
      <button className="sidebar__edit" onClick={handleEditProfileClick}>
        Change profile data
      </button>
      <button type="button" className="sidebar__logout">
        Log out
      </button>
    </div>
  );
}

export default Sidebar;
