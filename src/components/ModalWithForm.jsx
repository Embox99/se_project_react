import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  redirectButtonText,
  closeModal,
  isOpen,
  onSubmit,
  handleTextButton,
  isValid,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          onClick={closeModal}
          className="modal__close"
        ></button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__buttons">
            <button
              type="submit"
              className={`modal__submit ${
                !isValid ? "modal__submit-disabled" : ""
              }`}
              disabled={`${isValid ? "" : "disabled"}`}
            >
              {buttonText}
            </button>
            <button
              type="button"
              className="modal__text-button"
              onClick={handleTextButton}
            >
              {redirectButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
