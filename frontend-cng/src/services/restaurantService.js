import axiosInstance from "../axios/axiosInstance.js";

export const uploadRestaurant = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8000/manageSupplier/uploadRestaurant",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error("Error al agregar el restaurante:", error);
    setError(
      "Hubo un error al agregar el restaurante. Por favor, inténtelo de nuevo."
    );
  }
};
