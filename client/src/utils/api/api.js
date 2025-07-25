import axios from "axios";

console.log(import.meta.env.VITE_BACKEND_URL);

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
