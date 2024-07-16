import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/authServices.js";

const Login = () => {
  const [dataDNI, setDataDNI] = useState("");
  const [dataPassword, setDataPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginRequest = async (dataDNI, dataPassword) => {
    setIsLoading(true);
    try {
      const loggedIn = await login(dataDNI, dataPassword);
      if (loggedIn) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error en solicitud de inicio de sesión:", error.message);
    } finally {
      setIsLoading(false);
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

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
