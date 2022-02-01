import React, { useReducer } from "react";
import VentasContext from "./ventaContext";
import VentasReducer from "./ventaReducer";

import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";

import { OVTENER_PRODUCTOS_VEMTA } from "../../types";

const VentasState = (props) => {
  const initialState = {
    productosVenta: [],
  };

  // Creando dispach y state
  const [state, dispatch] = useReducer(VentasReducer, initialState);

  //Funciones para el CRUD

  // Obtener todos los productos de la base de datos

  const obtenerProductosVenta = async () => {
    try {
      const resultado = await clienteAxios.get("/api/ventas");

      console.log("resultado: ", resultado.data);

      dispatch({
        type: OVTENER_PRODUCTOS_VEMTA,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener la informacion de los Productos de Venta!",
      });
    }
  };

  return (
    <VentasContext.Provider
      value={{
        productosVenta: state.productosVenta,
        obtenerProductosVenta,
      }}
    >
      {props.children}
    </VentasContext.Provider>
  );
};

export default VentasState;
