import ModalWithForm from "./ModalWithForm";
import { useState } from "react";

export default function EditProfileModal(
  activeModal,
  closeModal,
  isOpen,
  handleUpdateUser
) {
  const [data, setData] = useState({
    name: "",
    avatarUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
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
          id="avatarUrl"
          placeholder="Avatar URL"
          name="avatarUrl"
          required
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}
