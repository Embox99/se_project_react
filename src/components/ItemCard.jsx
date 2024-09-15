import "../blocks/ItemCard.css";
import likeImage from "../assets/like-button.svg";
import unlikeImage from "../assets/unlike-button.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const { isLoggedIn, userData } = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === userData._id);

  const onCardLike = () => {
    handleCardLike({ id: item._id, isLiked: isLiked });
  };

  return (
    <li className="card">
      <div className="card__title-container">
        <h2 className="card__name">{item.name}</h2>
        <img
          src={isLiked ? likeImage : unlikeImage}
          className={`card__like ${isLoggedIn ? "" : "card__like-hidden"}`}
          onClick={onCardLike}
        />
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
