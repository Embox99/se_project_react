import React from "react";
import "../blocks/Profile.css";
import Sidebar from "../components/Sidebar";
import ClothesSection from "../components/ClothesSection";

function Profile({
  handleCardClick,
  handleAddClick,
  clothingItems,
  handleEditProfileClick,
  handleLogOut,
  handleCardLike,
}) {
  return (
    <div className="profile">
      <section className="profile__slidebar">
        <Sidebar
          handleEditProfileClick={handleEditProfileClick}
          handleLogOut={handleLogOut}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={handleCardClick}
          handleAddClick={handleAddClick}
          clothingItems={clothingItems}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
