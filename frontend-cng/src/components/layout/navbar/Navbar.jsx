import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteToken} from "../../../services/authServices.js";
import "./Navbar.css";

const Navbar = () => {
  const [proveedoresOpen, setProveedoresOpen] = useState(false);
  const [destinosOpen, setDestinosOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (setter) => {
    setter((prev) => !prev);
  };

  const handleMenuClose = (setter) => {
    setter(false);
  };

  const handleLogout = () => {
    deleteToken();
    navigate("/");
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
              Calendario de Eventos
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
        <div className="contenedorTituloAuth">
          <div className="navbar-logo">
            <Link to="/home" className="navbar-logo-link">
              Concierge Tool
            </Link>
          </div>
          <div className="navbar-auth">
            <button onClick={handleLogout} className="navbar-auth-link">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
