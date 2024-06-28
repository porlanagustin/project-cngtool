import React, { useState } from "react";
import axios from "axios";
import "./Card.css";

const apiUrl = "http://127.0.0.1:8000/concierge";

const Card = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [expandedRows, setExpandedRows] = useState(
    Array(data.length).fill(false)
  );

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

  const toggleExpand = (rowIndex) => {
    const newExpandedRows = [...expandedRows];
    newExpandedRows[rowIndex] = !newExpandedRows[rowIndex];
    setExpandedRows(newExpandedRows);
  };

  return (
    <div>
      <div className="container-card">
        {data.map((row, rowIndex) => (
          <div className="card" key={rowIndex}>
            <figure>
              <img src={row.img} alt="" />
            </figure>
            <div className="contenido-card">
              <h3>{row.nombre}</h3>
              <p>
                {expandedRows[rowIndex]
                  ? row.descripcion
                  : row.descripcion.substring(0, 100) + "..."}
              </p>
              <p>Dirección: {row.direccion}</p>
              <p>Web: {row.web}</p>
              <input
                type="checkbox"
                checked={selectedRows.includes(rowIndex)}
                onChange={() => handleCheckboxChange(rowIndex)}
              />
              <button onClick={() => toggleExpand(rowIndex)}>
                {expandedRows[rowIndex] ? "Mostrar menos" : "Mostrar más"}
              </button>
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
