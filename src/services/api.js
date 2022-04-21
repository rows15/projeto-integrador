import axios from "axios";

const api = axios.create({
  baseURL: "https://18.118.21.85:8080/",
});

export default api;
