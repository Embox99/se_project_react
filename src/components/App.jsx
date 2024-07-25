import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../blocks/App.css";
import { cordinates, APIkey } from "../utils/constants";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import { getWeather, filterWeatherData } from "../utils/weatherApi.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import Profile from "./Profile.jsx";
import AddItemModal from "./AddItemModal.jsx";
import { deleteItem, getItems, addItem } from "../utils/Api.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const onAddItem = (item) => {
    return addItem(item)
      .then(() => {
        setClothingItems([...clothingItems, item]);
      })
      .catch(console.error);
  };

  function handleDeleteCard(id) {
    deleteItem(id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleAddItemSubmit = (item) => {
    const newItem = { _id: clothingItems.length + 1, ...item };
    onAddItem(newItem);
    setClothingItems((prevItems) => {
      const updatedItems = [newItem, ...prevItems];
      return updatedItems;
    });
  };

  useEffect(() => {
    getWeather(cordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  return (
    <BrowserRouter basename="/se_project_react">
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header handleAddClick={handleAddClick} weatherData={weatherData} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    handleCardClick={handleCardClick}
                    handleAddClick={handleAddClick}
                    clothingItems={clothingItems}
                  />
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            closeModal={closeModal}
            onAddItem={handleAddItemSubmit}
            activeModal={activeModal}
            isOpen={activeModal === "add-garment"}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            closeModal={closeModal}
            isOpen={activeModal === "preview"}
            handleDeleteCard={handleDeleteCard}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
