import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const fetchEventos = async () => {
  try {
    const response = await api.get("/shows/actualShows");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
