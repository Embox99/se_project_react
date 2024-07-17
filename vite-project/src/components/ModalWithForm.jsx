import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  closeModal,
}) {
  return (
    <div
      className={`modal ${
        activeModal === "add-garment" ? "modal__opened" : ""
      }`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          onClick={closeModal}
          className="modal__close"
        ></button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
