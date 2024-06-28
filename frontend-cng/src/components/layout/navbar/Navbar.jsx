import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [proveedoresOpen, setProveedoresOpen] = useState(false);
  const [destinosOpen, setDestinosOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleMenuClick = (setter) => {
    setter((prev) => !prev);
  };

  const handleMenuClose = (setter) => {
    setter(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <div className="navbar-item">
            <button
              className="navbar-button"
              onClick={() => handleMenuClick(setProveedoresOpen)}
            >
              Proveedores
            </button>
            {proveedoresOpen && (
              <div className="navbar-menu">
                <Link
                  to="/transfers"
                  onClick={() => handleMenuClose(setProveedoresOpen)}
                >
                  Traslados
                </Link>
                <Link
                  to="/gifts"
                  onClick={() => handleMenuClose(setProveedoresOpen)}
                >
                  Regalos
                </Link>
                <Link to="" onClick={() => handleMenuClose(setProveedoresOpen)}>
                  Tickets
                </Link>
                <Link to="" onClick={() => handleMenuClose(setProveedoresOpen)}>
                  Excursiones
                </Link>
                <Link to="" onClick={() => handleMenuClose(setProveedoresOpen)}>
                  Golf
                </Link>
              </div>
            )}
          </div>

          <div className="navbar-item">
            <button
              className="navbar-button"
              onClick={() => handleMenuClick(setDestinosOpen)}
            >
              Informacion de Destinos
            </button>
            {destinosOpen && (
              <div className="navbar-menu">
                <Link
                  to="/restaurants"
                  onClick={() => handleMenuClose(setDestinosOpen)}
                >
                  Restaurantes
                </Link>
                <Link to="" onClick={() => handleMenuClose(setDestinosOpen)}>
                  Lugares a visitar
                </Link>
                <Link to="" onClick={() => handleMenuClose(setDestinosOpen)}>
                  Teatros
                </Link>
              </div>
            )}
          </div>

          <div className="navbar-item">
            <button
              className="navbar-button"
              onClick={() => handleMenuClick(setCalendarOpen)}
            >
              CALENDARIO DE EVENTOS
            </button>
            {calendarOpen && (
              <div className="navbar-menu">
                <Link
                  to="/CalendarEvents"
                  onClick={() => handleMenuClose(setCalendarOpen)}
                >
                  Calendario de eventos
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="navbar-logo">
          <Link to="" className="navbar-logo-link">
            Concierge Tool
          </Link>
          <img
            src="../../amexlogo.png"
            alt="Amex Logo"
            className="navbar-logo-img"
          />
        </div>

        <div className="navbar-auth">
          <Link to="/login" className="navbar-auth-link">
            Login
          </Link>
          <Link to="/register" className="navbar-auth-link">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
