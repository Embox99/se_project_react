import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";
import "../blocks/AddItemModal.css";
import { useFormAndValidation } from "../utils/useFormAndValidation";

function AddItemModal({ closeModal, onAddItem, activeModal, isOpen }) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useFormAndValidation();

  const resetCurrentForm = () => {
    resetForm({ name: "", imageUrl: "", weather: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values, resetCurrentForm);
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      activeModal={activeModal}
      closeModal={closeModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl || ""}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label_type_radio">
          <input
            name="weather"
            type="radio"
            className="modal__radio-input"
            id="hot"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          <span> Hot </span>
        </label>
        <label htmlFor="warm" className="modal__label_type_radio">
          <input
            name="weather"
            type="radio"
            className="modal__radio-input"
            id="warm"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <span>Warm</span>
        </label>
        <label htmlFor="cold" className="modal__label_type_radio">
          <input
            name="weather"
            type="radio"
            className="modal__radio-input"
            id="cold"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <span>Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
