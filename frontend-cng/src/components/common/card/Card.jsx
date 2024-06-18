import React, { useState } from "react";
import axios from "axios";
import "./Card.css";

const apiUrl = "http://127.0.0.1:8000/concierge";

const Card = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);

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

    axios
      .post(apiUrl, filasSeleccionadas, { responseType: "arraybuffer" })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = "all_suppliers.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log("Error al realizar la solicitud:", error);
      });
  };

  // Función para generar las estrellas
  const renderStars = (puntuacion) => {
    const stars = [];
    const totalStars = 5;
    const roundedRating = Math.round(puntuacion * 2) / 2; // Redondea al medio punto más cercano

    for (let i = 1; i <= totalStars; i++) {
      if (i <= roundedRating) {
        stars.push(
          <span key={i} className="star">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star empty">
            &#9734;
          </span>
        );
      }
    }

    return stars;
  };

  return (
    <div>
      <div className="container-card">
        {data.map((row, rowIndex) => (
          <div className="card" key={rowIndex}>
            <figure>
              <img src={row.img} alt="" />
              <div className="puntuacion">
                {renderStars(row.puntuacion)}
                <span>({row.puntuacion})</span>
              </div>
            </figure>
            <div className="contenido-card">
              <h3>{row.nombre}</h3>
              <p>{row.descripcion}</p>
              <p>Dirección: {row.direccion}</p>
              <p>
                Web:{" "}
                <a href={row.web} target="_blank" rel="noopener noreferrer">
                  {row.web}
                </a>
              </p>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={() => handleCheckboxChange(rowIndex)}
                />
                <span>Seleccionar</span>
              </label>
            </div>
          </div>
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
