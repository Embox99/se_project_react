import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function RegisterModal({
  activeModal,
  closeModal,
  isOpen,
  handleRegistration,
  handleTextButton,
}) {
  const [data, setData] = useState({
    email: "",
    password: "",
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
    setData({ email: "", password: "", name: "", avatarUrl: "" });
    setIsValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({
      email: data.email,
      password: data.password,
      name: data.name,
      avatar: data.avatarUrl,
    });
    resetForm();
    closeModal();
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      redirectButtonText="or Log in"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      handleTextButton={handleTextButton}
      isValid={isValid}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={data.email}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          value={data.password}
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="register-name"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          value={data.name}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar URL *
        <input
          type="url"
          className="modal__input"
          id="avatar-url"
          placeholder="Avatar URL"
          name="avatarUrl"
          required
          onChange={handleChange}
          value={data.avatarUrl}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
