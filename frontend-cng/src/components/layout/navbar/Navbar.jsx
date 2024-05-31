import { Link } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [proveedoresAnchorEl, setProveedoresAnchorEl] = useState(null);
  const [destinosAnchorEl, setDestinosAnchorEl] = useState(null);
  const [calendarAnchorEl, setCalendarAnchorEl] = useState(null);

  const handleMenuClick = (event, anchorElSetter) => {
    anchorElSetter(event.currentTarget);
  };

  const handleMenuClose = (anchorElSetter) => {
    anchorElSetter(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "50px",
            }}
          >
            {/*BOTON PROVEEDORES*/}
            <Button
              variant="contained"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginLeft: "10px",
              }}
              onClick={(event) =>
                handleMenuClick(event, setProveedoresAnchorEl)
              }
            >
              Proveedores
            </Button>
            <Menu
              sx={{
                marginTop: "5px",
              }}
              anchorEl={proveedoresAnchorEl}
              open={Boolean(proveedoresAnchorEl)}
              onClose={() => handleMenuClose(setProveedoresAnchorEl)}
            >
              <MenuItem onClick={() => handleMenuClose(setProveedoresAnchorEl)}>
                <Link
                  to="/transfers"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Traslados
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose(setProveedoresAnchorEl)}>
                <Link
                  to="/gifts"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Regalos
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose(setProveedoresAnchorEl)}>
                <Link
                  to=""
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Tickets
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose(setProveedoresAnchorEl)}>
                <Link
                  to=""
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Excursiones
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose(setProveedoresAnchorEl)}>
                <Link
                  to=""
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Golf
                </Link>
              </MenuItem>
            </Menu>

            {/*BOTON DESTINOS*/}
            <Button
              variant="contained"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginLeft: "10px",
              }}
              onClick={(event) => handleMenuClick(event, setDestinosAnchorEl)}
            >
              Informacion de Destinos
            </Button>
            <Menu
              sx={{
                marginTop: "5px",
              }}
              anchorEl={destinosAnchorEl}
              open={Boolean(destinosAnchorEl)}
              onClose={() => handleMenuClose(setDestinosAnchorEl)}
            >
              <MenuItem onClick={() => handleMenuClose(setDestinosAnchorEl)}>
                <Link
                  to="/restaurants"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Restaurantes
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose(setDestinosAnchorEl)}>
                <Link
                  to=""
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Lugares a visitar
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleMenuClose(setProveedoresAnchorEl)}>
                <Link
                  to=""
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Teatros
                </Link>
              </MenuItem>
            </Menu>

            {/*BOTON CALENDARIO*/}
            <Button
              variant="contained"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginLeft: "10px",
              }}
              onClick={(event) => handleMenuClick(event, setCalendarAnchorEl)}
            >
              CALENDARIO DE EVENTOS
            </Button>
            <Menu
              anchorEl={calendarAnchorEl}
              open={Boolean(calendarAnchorEl)}
              onClose={() => handleMenuClose(setCalendarAnchorEl)}
              getContentAnchorEl={null}
              sx={{
                marginTop: "5px",
              }}
            >
              <MenuItem onClick={() => handleMenuClose(setCalendarAnchorEl)}>
                <Link
                  to="/CalendarEvents"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Calendario de eventos
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <Link to="" style={{ color: "inherit", textDecoration: "none" }}>
                Concierge Tool
              </Link>
              <img
                src="../../amexlogo.png"
                alt="Amex Logo"
                style={{ maxWidth: "100px", marginLeft: "10px" }}
              />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
