import React, { useState } from "react";
import "../blocks/ToogleSwitch.css";

const ToogleSwitch = () => {
  const [currentTemperatureUnit, handleToogleSwitchChange] = useState("C");
  const handleChange = () => {
    if (currentTemperatureUnit === "C") handleToogleSwitchChange("F");
    if (currentTemperatureUnit === "F") handleToogleSwitchChange("C");
  };
  console.log(currentTemperatureUnit);
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleChange}
      ></input>
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToogleSwitch;
