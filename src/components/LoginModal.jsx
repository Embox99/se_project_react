import React from "react";
import ModalWithForm from "./ModalWithForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormAndValidation } from "../utils/useFormAndValidation";

function LoginModal({
  activeModal,
  closeModal,
  isOpen,
  handleLogIn,
  handleTextButton,
}) {
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const resetCurrentForm = () => {
    resetForm({ email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn(values)
      .then(() => {
        closeModal();
        resetCurrentForm();
        navigate("/profile");
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      redirectButtonText="or Sign Up"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      handleTextButton={handleTextButton}
      isValid={isValid}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="user-email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="user-password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
