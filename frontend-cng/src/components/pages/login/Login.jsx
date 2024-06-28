import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, setToken } from "../../../services/authServices.js";
import Swal from "sweetalert2";

const Login = () => {
  const [dataDNI, setDataDNI] = useState("");
  const [dataPassword, setDataPassword] = useState("");
  const navigate = useNavigate();

  const loginRequest = async (dataDNI, dataPassword) => {
    try {
      const token = await login(dataDNI, dataPassword);

      if (token) {
        setToken(token);
      }

      navigate("/home");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al iniciar sesion",
        footer: '<a href="#">Solicitar acceso</a>',
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginRequest(dataDNI, dataPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={dataDNI}
            onChange={(e) => setDataDNI(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={dataPassword}
            onChange={(e) => setDataPassword(e.target.value)}
            required
          />

          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
