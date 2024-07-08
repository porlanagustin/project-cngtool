import { jwtDecode } from "jwt-decode";
import axiosInstance from "../axios/axiosInstance.js";


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
    if (response.data) {
      localStorage.setItem("token", response.data.access_token);
      return true;
    }
  } catch {
    console.log("DENEGADO");
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
