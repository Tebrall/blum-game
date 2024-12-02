import React, { useState } from "react";
import "./Menu.css";

const Menu = ({ onStartGame }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showError = (message) => {
    setErrorMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">Welcome to ALLIANCE!</h1>
      <div className="menu-buttons">
        <button className="menu-button" onClick={onStartGame}>
          Tap to Earn
        </button>
        <button className="menu-button" onClick={() => showError("Work is still in progress")}>
          Story Mode
        </button>
        <button className="menu-button" onClick={() => showError("Work is still in progress")}>
          My Wallet
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{errorMessage}</p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
