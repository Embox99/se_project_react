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

  const resetForm = () => {
    setData({ name: "", avatarUrl: "" });
    setIsValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(data);
    resetForm();
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
          value={data.name}
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
          name="avatarUrl"
          required
          value={data.avatarUrl}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}
