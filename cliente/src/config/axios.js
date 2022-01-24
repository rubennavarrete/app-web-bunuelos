import axios from "axios";

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

clienteAxios.defaults.headers.common["x-auth-token"] =
  localStorage.getItem("token");

export default clienteAxios;
