import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function ClothesSection({
  onCardClick,
  handleAddClick,
  clothingItems,
  handleCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userCards = clothingItems.filter(
    (item) => item.owner === currentUser.userData._id
  );

  return (
    <div className="clothes-section">
      <section className="clothes-section__container-text">
        <p className="clothes-section__your-items">Your items</p>
        <button
          onClick={handleAddClick}
          className="clothes-section__add-btn"
          type="button"
        >
          + Add New
        </button>
      </section>
      <ul className="clothes-section__card-list">
        {userCards.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              handleCardLike={handleCardLike}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
