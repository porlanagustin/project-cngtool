import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteToken } from "../../../services/authServices.js";
import "./Navbar.css";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleDropdownClick = (dropdownName, event) => {
    event.stopPropagation();
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleMenuClose = () => {
    setOpenDropdown(null);
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
          <div className="navbar-auth">
            <button onClick={handleLogout} className="navbar-auth-link">
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-menu-toggle"
          onClick={() => handleDropdownClick("menu", event)}
        >
          ☰
        </button>

        {/* Links Section */}
        <div
          className={`navbar-links ${openDropdown === "menu" ? "open" : ""}`}
        >
          <div className="navbar-item">
            <button
              className="navbar-button"
              onClick={(event) => handleDropdownClick("proveedores", event)}
            >
              Proveedores
            </button>
            {openDropdown === "proveedores" && (
              <div className="navbar-menu">
                <Link to="/transfers" onClick={handleMenuClose}>
                  Traslados
                </Link>
                <Link to="/gifts" onClick={handleMenuClose}>
                  Regalos
                </Link>
                <Link to="" onClick={handleMenuClose}>
                  Tickets
                </Link>
                <Link to="" onClick={handleMenuClose}>
                  Excursiones
                </Link>
                <Link to="" onClick={handleMenuClose}>
                  Golf
                </Link>
              </div>
            )}
          </div>

          <div className="navbar-item">
            <button
              className="navbar-button"
              onClick={(event) => handleDropdownClick("destinos", event)}
            >
              Informacion de Destinos
            </button>
            {openDropdown === "destinos" && (
              <div className="navbar-menu">
                <Link to="/restaurants" onClick={handleMenuClose}>
                  Restaurantes
                </Link>
                <Link to="" onClick={handleMenuClose}>
                  Lugares a visitar
                </Link>
                <Link to="" onClick={handleMenuClose}>
                  Teatros
                </Link>
              </div>
            )}
          </div>

          <div className="navbar-item">
            <button
              className="navbar-button"
              onClick={(event) => handleDropdownClick("calendar", event)}
            >
              Calendario de Eventos
            </button>
            {openDropdown === "calendar" && (
              <div className="navbar-menu">
                <Link to="/CalendarEvents" onClick={handleMenuClose}>
                  Calendario de eventos
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
