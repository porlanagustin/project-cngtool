import "./Homepage.css";

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
        <h2>Que estabas buscando?</h2>
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button className="search-button">Buscar</button>
        </div>
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
