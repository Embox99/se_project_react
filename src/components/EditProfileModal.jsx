import ModalWithForm from "./ModalWithForm";

export default function EditProfileModal(
  activeModal,
  closeModal,
  isOpen,
  handleUpdateUser
) {
  const handleSubmit = () => {
    handleUpdateUser(values);
    closeModal();
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      activeModal={activeModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="username"
          name="name"
          placeholder="Name"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Avatar URL *
        <input
          type="url"
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          name="avatarUrl"
          required
        />
      </label>
    </ModalWithForm>
  );
}
