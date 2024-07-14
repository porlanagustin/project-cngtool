// Homepage.jsx
import React from "react";
import "./Homepage.css";
import SuggestionCard from "../../common/SuggestionCard/SuggestionCard";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Bienvenida y Resumen */}
      <section className="welcome">
        <h1>ConciergeTool</h1>
        <p>Empoderando a nuestro equipo con herramientas efectivas.</p>
      </section>

      {/* Sección de Búsqueda */}
      <section className="search-section">
        <h2>¿Qué estabas buscando?</h2>
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button className="search-button">Buscar</button>
        </div>
      </section>

      {/* Sugerencias */}
      <section className="sugerencias">
        <SuggestionCard
          title="Lugares para Visitar"
          description="Descubre los mejores lugares para visitar en tu área."
          link="#"
        />
        <SuggestionCard
          title="Restaurantes Recomendados"
          description="Encuentra los mejores restaurantes según tus preferencias."
          link="#"
        />
        <SuggestionCard
          title="Eventos Cercanos"
          description="Mantente al día con los eventos que suceden cerca de ti."
          link="#"
        />
      </section>

      {/* Información de Contacto */}
      <section className="contact-info">
        <h2>¿Necesitas Ayuda?</h2>
        <p>
          Para soporte, contacta a{" "}
          <a href="mailto:support@conciergetool.com">
            support@conciergetool.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Homepage;
