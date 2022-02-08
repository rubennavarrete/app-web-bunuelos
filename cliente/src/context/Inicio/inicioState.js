import React, { useReducer } from "react";

import Swal from "sweetalert2";

import inicioContext from "./inicioContext";
import inicioReducer from "./inicioReducer";
import {
  OBTENER_CAJA,
  OBTENER_CLIENTES_TOTALES,
  OBTENER_TOTAL_VENTA,
  OBTENER_NUMERO_PRODUCTOS,
} from "../../types";

import clienteAxios from "../../config/axios";

const InicioState = (props) => {
  const initialState = {
    cajaHoy: null,
    totalVenta: null,
    clientesTotales: null,
    numeroProductos: null,
  };

  // Dispach para ejecutar las acciones
  const [state, dispach] = useReducer(inicioReducer, initialState);

  // Funciones para el CRUD

  // Obtener los datos de la caja de Hoy de
  const obtenerCajaHoy = async () => {
    try {
      const resultado = await clienteAxios.get("/api/inicio/caj");
      dispach({
        type: OBTENER_CAJA,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener la información de la Caja de Hoy!",
      });
    }
  };

  // Obtener los datos de el total de venta
  const obtenerTotalVenta = async () => {
    try {
      const resultado = await clienteAxios.get("/api/inicio/cn");

      dispach({
        type: OBTENER_TOTAL_VENTA,
        payload: resultado.data.tot,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener la información de el total de venta!",
      });
    }
  };

  // Obtener los datos de la caja de Hoy de
  const obtenerClientesTotales = async () => {
    try {
      const resultado = await clienteAxios.get("/api/inicio/ct");

      dispach({
        type: OBTENER_CLIENTES_TOTALES,
        payload: resultado.data.cliT,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener la información de los clientes totales!",
      });
    }
  };

  // Obtener los datos de el numeor de productos
  const obtenerProductosTotales = async () => {
    try {
      const resultado = await clienteAxios.get("/api/inicio/pt");

      dispach({
        type: OBTENER_NUMERO_PRODUCTOS,
        payload: resultado.data.PTotal,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener la información de los clientes totales!",
      });
    }
  };

  return (
    <inicioContext.Provider
      value={{
        cajaHoy: state.cajaHoy,
        totalVenta: state.totalVenta,
        clientesTotales: state.clientesTotales,
        numeroProductos: state.numeroProductos,
        obtenerCajaHoy,
        obtenerClientesTotales,
        obtenerTotalVenta,
        obtenerProductosTotales,
      }}
    >
      {props.children}
    </inicioContext.Provider>
  );
};

export default InicioState;
