import https from "https";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // Ignorar errores de certificado
  }),
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
