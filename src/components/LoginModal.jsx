import React from "react";
import ModalWithForm from "./ModalWithForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginModal({
  activeModal,
  closeModal,
  isOpen,
  handleLogIn,
  handleTextButton,
}) {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn(data)
      .then(() => {
        closeModal();
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
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="user-email"
          name="email"
          placeholder="Email"
          value={data.email}
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
          value={data.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
