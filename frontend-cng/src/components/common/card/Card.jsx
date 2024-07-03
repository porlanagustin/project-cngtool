import React, { useState } from "react";
import axios from "axios";
import "./Card.css";

const apiUrl = "http://127.0.0.1:8000/restaurantsToPdf";

const RestaurantCard = ({
  restaurant,
  index,
  handleCheckboxChange,
  isSelected,
  handleExpandClick,
  isExpanded,
}) => (
  <div key={index} className="card">
    <img src={restaurant.img} alt={restaurant.name} className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{restaurant.name}</h2>
      <p className="card-address">{restaurant.address}</p>
      {restaurant.web && (
        <a
          href={restaurant.web}
          className="card-web"
          target="_blank"
          rel="noopener noreferrer"
        >
          {restaurant.web}
        </a>
      )}
      <button className="expand-button" onClick={handleExpandClick}>
        {isExpanded ? "Cerrar" : "Ver más"}
      </button>
      <div className={`card-details ${isExpanded ? "expanded" : ""}`}>
        <p className="card-description">{restaurant.description}</p>
        {isExpanded && (
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => handleCheckboxChange(index)}
              className="card-checkbox"
            />
            <label className="card-checkbox-label">Seleccionar</label>
          </div>
        )}
      </div>
    </div>
  </div>
);

const Card = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCheckboxChange = (rowIndex) => {
    const newSelectedRows = [...selectedRows];

    if (newSelectedRows.includes(rowIndex)) {
      newSelectedRows.splice(newSelectedRows.indexOf(rowIndex), 1);
    } else {
      newSelectedRows.push(rowIndex);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleImprimirClick = () => {
    const filasSeleccionadas = selectedRows.map((rowIndex) => data[rowIndex]);

    console.log(filasSeleccionadas);
    axios
      .post(apiUrl, filasSeleccionadas, { responseType: "arraybuffer" })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = "PDFRESTAURANTS.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log("Error al realizar la solicitud:", error);
      });
  };

  return (
    <div className="contenedorGeneral">
      <div className="card-container">
        {data.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            restaurant={restaurant}
            index={index}
            handleCheckboxChange={handleCheckboxChange}
            isSelected={selectedRows.includes(index)}
            handleExpandClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
            isExpanded={expandedIndex === index}
          />
        ))}
      </div>
      <div className="button-container">
        <button className="buttonPDF" onClick={handleImprimirClick}>
          Imprimir PDF
        </button>
      </div>
    </div>
  );
};

export default Card;
