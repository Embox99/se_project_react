import "../blocks/ClothesSection.css";
import { defaultClothingItems } from "../utils/constants";
import ItemCard from "./ItemCard";

function ClothesSection({ onCardClick, handleAddClick }) {
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
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
