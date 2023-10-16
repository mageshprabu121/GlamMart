import axios from "axios";

export const SERVER_URL="http://localhost:8080/";
const BASE_URL = SERVER_URL+"api/";

const TOKEN = localStorage.getItem("token");

export const apiRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
