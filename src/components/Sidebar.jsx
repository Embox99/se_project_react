import "../blocks/Sidebar.css";
import avatar from "../assets/user-avatar.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="profile__avatar" className="sidebar__avatar" />
      <p className="sidebar__username">Terence Tegegne</p>
    </div>
  );
}

export default Sidebar;
