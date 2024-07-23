import React from "react";
import "../blocks/Profile.css";
import Sidebar from "../components/Sidebar";
import ClothesSection from "../components/ClothesSection";

function Profile({ handleCardClick, handleAddClick }) {
  return (
    <div className="profile">
      <section className="profile__slidebar">
        <Sidebar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={handleCardClick}
          handleAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;
