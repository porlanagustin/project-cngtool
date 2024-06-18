import React, { useState } from "react";
import "./AddSupplier.css";

const AddSupplier = () => {
  const [nombre, setNombre] = useState("");
  const [img, setImg] = useState("");
  const [direccion, setDireccion] = useState("");
  const [web, setWeb] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nombre, img, direccion, web, descripcion });
    setNombre("");
    setImg("");
    setDireccion("");
    setWeb("");
    setDescripcion("");

    alert("Restaurante agregado correctamente!");
  };

  return (
    <div className="form-container">
      <h2>Agregar Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del restaurante:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          URL de la imagen:
          <input
            type="url"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </label>
        <label>
          Dirección:
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </label>
        <label>
          Sitio web:
          <input
            type="url"
            value={web}
            onChange={(e) => setWeb(e.target.value)}
          />
        </label>
        <label>
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </label>
        <button type="submit">Agregar Restaurante</button>
      </form>
    </div>
  );
};

export default AddSupplier;
