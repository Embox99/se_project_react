import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "../blocks/App.css";
import { cordinates, APIkey } from "../utils/constants";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import { getWeather, filterWeatherData } from "../utils/weatherApi.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import Profile from "./Profile.jsx";
import AddItemModal from "./AddItemModal.jsx";
import {
  deleteItem,
  getItems,
  addItem,
  updateCurrentUser,
  getCurrentUser,
  addCardLike,
  deleteCardLike,
} from "../utils/Api.js";
import LoginModal from "./LoginModal.jsx";
import RegisterModal from "./RegisterModal.jsx";
import EditProfileModal from "./EditProfileModal.jsx";
import { setToken, getToken, removeToken } from "../utils/token.js";
import { authorization, registration, isTokenValid } from "../utils/auth.js";
import ProtectedRoute from "./ProtectedRoute.jsx";

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
  const [userData, setUserData] = useState({ id: "", name: "", avatarUrl: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegistrationClick = () => {
    setActiveModal("register");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const onAddItem = (item, resetCurrentForm) => {
    const token = getToken();
    addItem(item, token)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        resetCurrentForm();
        closeModal();
      })
      .catch(console.error);
  };

  function handleDeleteCard(id) {
    const token = getToken();
    deleteItem(id, token)
      .then(() => {
        setClothingItems(clothingItems.filter((item) => item._id !== id));
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleRegistration = (values) => {
    registration(values)
      .then((res) => {
        setIsLoggedIn(true);
        setToken(res.token);
        setUserData({
          id: res._id,
          name: res.name,
          avatarUrl: res?.avatarUrl,
        });
        resetCurrentForm();
        closeModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    const token = getToken();
    if (!token) return;
    getCurrentUser(token)
      .then((res) => {
        setIsLoggedIn(true);
        setUserData(res);
      })
      .catch(console.error);
  }, []);

  const handleLogIn = (values, resetCurrentForm) => {
    if (!values) return Promise.reject("No values provided");

   return authorization(values)
      .then((res) => {
        const token = res.token;
        setToken(token);
        return isTokenValid(token);
      })
      .then((res) => {
        setIsLoggedIn(true);
        setUserData(res);
        resetCurrentForm();
        closeModal();
      })
      .catch((err) => {
        console.error("Authorization failed:", err);
        return Promise.reject(err);
      });
  };

  const handleUpdateUser = (data, resetCurrentForm) => {
    const token = getToken();
    updateCurrentUser(data, token)
      .then((res) => {
        setUserData(res);
        resetCurrentForm();
        closeModal();
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    removeToken();
    setIsLoggedIn(false);
    setUserData({ id: "", name: "", avatarUrl: "" });
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = getToken();
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : deleteCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch(console.error);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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

  const currentUser = {
    isLoggedIn,
    userData,
  };

  return (
    <BrowserRouter basename="/se_project_react">
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <CurrentUserContext.Provider value={currentUser}>
            <div className="page__content">
              <Header
                handleAddClick={handleAddClick}
                weatherData={weatherData}
                handleLoginClick={handleLoginClick}
                handleRegistrationClick={handleRegistrationClick}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weatherData={weatherData}
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleCardLike={handleCardLike}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile
                        handleCardClick={handleCardClick}
                        handleAddClick={handleAddClick}
                        clothingItems={clothingItems}
                        handleEditProfileClick={handleEditProfileClick}
                        handleLogOut={handleLogOut}
                        handleCardLike={handleCardLike}
                      />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <Footer />
            </div>
            <AddItemModal
              closeModal={closeModal}
              onAddItem={onAddItem}
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
            <LoginModal
              activeModal={activeModal}
              closeModal={closeModal}
              isOpen={activeModal === "login"}
              handleLogIn={handleLogIn}
              handleTextButton={handleRegistrationClick}
            />
            <RegisterModal
              activeModal={activeModal}
              closeModal={closeModal}
              isOpen={activeModal === "register"}
              handleRegistration={handleRegistration}
              handleTextButton={handleLoginClick}
            />
            <EditProfileModal
              activeModal={activeModal}
              closeModal={closeModal}
              isOpen={activeModal === "edit-profile"}
              handleUpdateUser={handleUpdateUser}
            />
          </CurrentUserContext.Provider>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
