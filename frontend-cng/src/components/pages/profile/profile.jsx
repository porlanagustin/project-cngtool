import React, { useState } from "react";
import "./profile.css";

const ProfilePage = () => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const toggleHistoryVisibility = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image-container">
          <img src="/gente.png" alt="" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Nombre: Juan</h1>
          <h2 className="profile-lastname">Apellido: Pérez</h2>
          <p className="profile-title">Concierge</p>
          <p className="profile-description">
            Soy un trabajador dedicado a ofrecer la mejor experiencia a nuestros
            clientes. Tengo experiencia en la organización de eventos y la
            recomendación de destinos.
          </p>
          <div className="profile-history">
            <h3
              onClick={toggleHistoryVisibility}
              className="profile-history-title"
            >
              Historial de destinos/restaurantes impresos
            </h3>
            {isHistoryVisible && (
              <ul className="profile-history-list">
                <li>Destino/Restaurante 1</li>
                <li>Destino/Restaurante 2</li>
                <li>Destino/Restaurante 3</li>
                {/* Puedes añadir más elementos aquí */}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
