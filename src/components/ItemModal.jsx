import "../blocks/ItemModal.css";

function ItemModal({ card, closeModal, isOpen }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content-type-image">
        <button
          type="button"
          onClick={closeModal}
          className="modal__close modal__close-preview"
        ></button>
        <img
          src={card.link}
          alt={card.name}
          className="modal__image modal__image-preview"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
