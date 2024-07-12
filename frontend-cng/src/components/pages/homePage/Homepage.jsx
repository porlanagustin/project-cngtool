import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Bienvenida y Resumen */}
      <section className="welcome">
        <h1>Bienvenido al Concierge Tool</h1>
        <p>
          Empoderando a nuestro equipo <br />{" "}
          <span>con herramientas efectivas.</span>
        </p>
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
