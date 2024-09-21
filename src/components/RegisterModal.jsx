import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import { useFormAndValidation } from "../utils/useFormAndValidation";

function RegisterModal({
  activeModal,
  closeModal,
  isOpen,
  handleRegistration,
  handleTextButton,
}) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const resetCurrentForm = () => {
    resetForm({ email: "", password: "", name: "", avatarUrl: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({
      email: values.email,
      password: values.password,
      name: values.name,
      avatar: values.avatarUrl,
    }).then(() => {
      resetCurrentForm();
      closeModal();
    });
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
          value={values.email}
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
          value={values.password}
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
          value={values.name}
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
          value={values.avatarUrl}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
