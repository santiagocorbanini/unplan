import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // URL base definida en .env
  timeout: 10000, // Tiempo de espera de 10 segundos
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchEventos = async () => {
  try {
    const response = await api.get("/shows/actualShows");
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(
        "Error en la respuesta del servidor:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor:", error.request);
    } else {
      console.error("Error al configurar la solicitud:", error.message);
    }
    throw error;
  }
};
