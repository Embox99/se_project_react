import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

function AddItemModal({ closeModal, onAddItem, activeModal, isOpen }) {
  const [data, setData] = useState({ name: "", imageUrl: "", weather: "" });
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
    setData({ name: "", imageUrl: "", weather: "" });
    setIsValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(data);
    resetForm();
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
          value={data.name}
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
          value={data.imageUrl}
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
            checked={data.weather === "hot"}
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
            checked={data.weather === "warm"}
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
            checked={data.weather === "cold"}
            onChange={handleChange}
          />
          <span>Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
