import { jwtDecode } from "jwt-decode";
import { axiosInstance } from "../axios/axiosInstance.js";
import Swal from "sweetalert2";

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};

export const login = async (dataDNI, dataPassword) => {
  const formData = new URLSearchParams();
  formData.append("username", parseInt(dataDNI, 10));
  formData.append("password", dataPassword);

  try {
    const response = await axiosInstance.post("/login", formData);
    if (response.data.access_token) {
      localStorage.setItem("token", response.data.access_token);
      return true;
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        console.log(error.response)
        Swal.fire({
          icon: "error",
          title: `Credenciales incorrectas\n ${error.response.data.detail}`,
          text: "Por favor, verifica tus credenciales e intenta nuevamente.",
          footer:
            '<a href="/register">Solicitar acceso o reseteo de password</a>',
        });
        throw new Error("Credencials incorrectas");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error en el servidor",
          text: "Verifica tu conexion a internet o notifica al administrador.",
        });
        throw new Error("Error en el servidor, intenta nuevamente");
      }
    }
  }
};

export const getUserRole = () => {
  const token = getToken();
  if (token) {
    const payLoad = jwtDecode(token);
    return payLoad?.admin;
  }
  return null;
};

export const deleteToken = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
};

// export const isLog = () => {
//   const token = getToken();

//   if (token) {
//     try {
//       // const payLoad = jwtDecode(token);
//       // const isLogin = Date.now() < payLoad.exp;
//       return true;
//     } catch (error) {
//       console.error("Error decoding JWT:", error);
//       return false;
//     }
//   }
//   return false;
// };
