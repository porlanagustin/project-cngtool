import axiosInstance from "../axios/axiosInstance.js";
import Swal from "sweetalert2";
import { getToken } from "../services/authServices.js";

export const uploadRestaurant = async (data) => {
  const token = getToken();

  try {
    const response = await axiosInstance.post(
      "manageRestaurants/uploadRestaurant",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    Swal.fire({
      position: "center",
      icon: "success",
      title: `El restaurante ${response.data.name} fue agregado exitosamente`,
      showConfirmButton: false,
      timer: 4500,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        throw new Error(
          "No estas autenticado. Por favor, logueate nuevamente."
        );
      } else {
        throw new Error(
          "Hubo un error al agregar el restaurante. Por favor, inténtelo mas tarde."
        );
      }
    } else if (error.request) {
      throw new Error(
        "Error en el servidor. Por favor, de aviso al administrador."
      );
    } else {
      throw new Error(
        "Hubo un error al agregar el restaurante. Por favor, inténtelo mas tarde."
      );
    }
  }
};
