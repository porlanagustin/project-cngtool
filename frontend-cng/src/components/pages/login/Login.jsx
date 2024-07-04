import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/authServices.js";
import Swal from "sweetalert2";

const Login = () => {
  const [dataDNI, setDataDNI] = useState("");
  const [dataPassword, setDataPassword] = useState("");
  const navigate = useNavigate();

  const loginRequest = async (dataDNI, dataPassword) => {
    try {
      // const loggedIn = await login(dataDNI, dataPassword);
      // if (loggedIn) {
      //   navigate("/home");
      // }

      // LOGIN TRUCHO (BORRAR DESPUES)

      const login = true;

      if (login) {
        navigate("/home");
      }
      
    } catch (error) {
      console.error("Error en solicitud de inicio de sesión:", error);
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: "Por favor, verifica tus credenciales e intenta nuevamente.",
        footer:
          '<a href="/register">Solicitar acceso o reseteo de password</a>',
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
