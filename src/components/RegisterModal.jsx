import React from "react";
import ModalWithForm from "./ModalWithForm";

function RegisterModal(activeModal, closeModal, isOpen, handleRegistration) {
  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      redirectButtonText="or Register"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={isOpen}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          className="modal__label"
          id="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__label"
          id="password"
          placeholder="Password"
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__label"
          id="name"
          placeholder="Name"
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Avatar URL
        <input
          type="url"
          className="modal__label"
          id="avatar-url"
          placeholder="Avatar URL"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
