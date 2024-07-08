import { useState } from "react";
import "./AddRestaurant.css";
import { uploadRestaurant } from "../../../services/restaurantService";

const AddRestaurant = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData(e.target);

    try {
      await uploadRestaurant(data);
      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ContenedorGeneral">
      <div className="form-container">
        <h2>Agregar Nuevo Restaurante</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <InputField
            label="Nombre del restaurante"
            type="text"
            name="name"
            placeholder="Ingrese el nombre del restaurante"
            maxLength={100}
            required
          />
          <FileField
            label="Cargar imagen"
            name="image"
            accept="image/jpeg, image/png"
            required
          />
          <InputField
            label="Dirección"
            type="text"
            name="address"
            placeholder="Ingrese la dirección del restaurante"
            maxLength={200}
            required
          />
          <InputField
            label="Sitio web"
            type="text"
            name="web"
            placeholder="http://www.ejemplo.com"
            title="Incluya http:// o https://"
          />
          <TextAreaField
            label="Descripción"
            name="description"
            placeholder="Describa brevemente el restaurante"
            maxLength={500}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Agregando..." : "Agregar Restaurante"}
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, ...props }) => (
  <label>
    {label}
    <input {...props} />
  </label>
);

const FileField = ({ label, ...props }) => (
  <label>
    {label}
    <input type="file" {...props} />
  </label>
);

const TextAreaField = ({ label, ...props }) => (
  <label>
    {label}
    <textarea {...props}></textarea>
  </label>
);

export default AddRestaurant;
