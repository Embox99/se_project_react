import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ModalWithForm from "./ModalWithForm";
import { useFormAndValidation } from "../utils/useFormAndValidation";

export default function EditProfileModal({
  activeModal,
  closeModal,
  isOpen,
  handleUpdateUser,
}) {
  const { isLoggedIn, userData } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    if (userData) {
      setValues({
        name: userData.name || "",
        avatar: userData.avatar || "",
      });
    }
  }, [userData]);

  const resetCurrentForm = () => {
    resetForm({ username: "", avatar: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(values).then(() => {
      resetCurrentForm();
      closeModal();
    });
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
          value={values.name}
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
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}
