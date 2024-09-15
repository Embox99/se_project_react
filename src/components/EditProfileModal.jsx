import ModalWithForm from "./ModalWithForm";
import { useState } from "react";

export default function EditProfileModal({
  activeModal,
  closeModal,
  isOpen,
  handleUpdateUser,
}) {
  const [data, setData] = useState({
    name: "",
    avatarUrl: "",
  });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsValid(e.target.closest("form").checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleUpdateUser(data);
    closeModal();
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      activeModal={activeModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      closeModal={closeModal}
      isValid={isValid}
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
          onChange={handleChange}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar URL *
        <input
          type="url"
          className="modal__input"
          id="avatar"
          placeholder="Avatar URL"
          name="avatar"
          required
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}
