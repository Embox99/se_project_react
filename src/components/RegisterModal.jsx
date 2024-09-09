import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function RegisterModal(activeModal, closeModal, isOpen, handleRegistration) {
  const [data, setData] = useState({
    email: "",
    password: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(data);
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      redirectButtonText="or Register"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          className="modal__label"
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
          className="modal__label"
          id="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          value={data.password}
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__label"
          id="name"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          value={data.name}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Avatar URL
        <input
          type="url"
          className="modal__label"
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
