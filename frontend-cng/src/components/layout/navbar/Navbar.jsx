import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteToken } from "../../../services/authServices.js";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [proveedoresOpen, setProveedoresOpen] = useState(false);
  const [destinosOpen, setDestinosOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDropdownClick = (setter, event) => {
    event.stopPropagation();
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
        {/* Logo and Auth Section */}
        <div className="contenedorTituloAuth">
          <div className="navbar-logo">
            <Link to="/home" className="navbar-logo-link">
              Concierge Tool
            </Link>
          </div>
          {/* Removed the logout button from here */}
          {/* Perfil Menu */}
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-menu-toggle" onClick={handleMenuClick}>
          ☰
        </button>

        {/* Links Section */}
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <div className="navbar-item">
            <button
              className="navbar-button"
              onClick={(event) =>
                handleDropdownClick(setProveedoresOpen, event)
              }
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
              onClick={(event) => handleDropdownClick(setDestinosOpen, event)}
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
                <Link to="/PlaceToVisit" onClick={() => handleMenuClose(setDestinosOpen)}>
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
              onClick={(event) => handleDropdownClick(setCalendarOpen, event)}
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
          <div className="navbar-profile">
            <img
              src="/gente.png"
              alt="Profile"
              className="navbar-profile-img"
              onClick={() => setProfileMenuOpen((prev) => !prev)}
            />
            {profileMenuOpen && (
              <div className="navbar-profile-menu">
                <Link
                  to="/profile"
                  onClick={() => handleMenuClose(setProfileMenuOpen)}
                >
                  Ver Perfil
                </Link>
                <button onClick={handleLogout}>Cerrar Sesión</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
