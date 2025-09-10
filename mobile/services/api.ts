import axios from "axios";
import { API_BASE } from "../constants/config";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
  timeout: 15000
});

api.interceptors.request.use(async (config) => {
  // Example: attach token from storage or store
  // const token = await AsyncStorage.getItem("token");
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
