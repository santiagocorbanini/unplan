import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/unplan/",
  server: {
    proxy: {
      "/shows": {
        target: "https://149.50.146.27:3127", // La URL de tu API
        changeOrigin: true,
        secure: false, // Si el servidor tiene un certificado SSL auto-firmado
      },
    },
  },
});
