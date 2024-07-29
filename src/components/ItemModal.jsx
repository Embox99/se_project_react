import "../blocks/ItemModal.css";

function ItemModal({ card, closeModal, isOpen, handleDeleteCard }) {
  const handleDeleteCardClick = () => {
    handleDeleteCard(card._id);
  };
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content-type-image">
        <button
          type="button"
          onClick={closeModal}
          className="modal__close modal__close-preview"
        ></button>
        <img
          src={card.imageUrl}
          alt={card.name}
          className="modal__image modal__image-preview"
        />
        <div className="modal__footer">
          <div className="modal__footer-text">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            className="modal__delete-button"
            type="button"
            onClick={handleDeleteCardClick}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
