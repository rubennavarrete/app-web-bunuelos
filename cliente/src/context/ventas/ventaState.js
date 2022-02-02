import React, { useReducer } from "react";
import VentasContext from "./ventaContext";
import VentasReducer from "./ventaReducer";

import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";

import {
  OVTENER_PRODUCTOS_VEMTA,
  MOSTRAR_DETALLE_VENTA,
  CEDULA_CLIENTE,
  ITEMS_DETALLE_VENTA,
  MOSTRAR_INGRESAR_CLIENTE,
  CERRAR_INGRESAR_CLIENTE,
  CANCELAR_VENTA,
} from "../../types";

const VentasState = (props) => {
  const initialState = {
    productosVenta: [],
    mostrarDetalleVenta: false,
    clienteSeleccionado: null,
    intemsDetalleVenta: [],
    vistaIngresar: false,
  };

  // Creando dispach y state
  const [state, dispatch] = useReducer(VentasReducer, initialState);

  // Funciones para los formularios
  const mostrarVistaVenta = () => {
    dispatch({
      type: MOSTRAR_DETALLE_VENTA,
    });
  };

  // Funcion para ingresar cliente si no esta registado aun
  const mostrarIngresarCliente = () => {
    dispatch({
      type: MOSTRAR_INGRESAR_CLIENTE,
    });
  };

  // Funcion para quitar la vista de ingresar cliente
  const cerrarIngresarCliente = () => {
    dispatch({
      type: CERRAR_INGRESAR_CLIENTE,
    });
  };

  // Obtener la cedula del cliente para la factura
  const obtenerCedulaFactura = (cedula) => {
    dispatch({
      type: CEDULA_CLIENTE,
      payload: cedula,
    });
  };

  // Obtener los items para el detalle de ventas
  const obtenerItemsDetalleVentas = (item) => {
    dispatch({
      type: ITEMS_DETALLE_VENTA,
      payload: item,
    });
  };

  // Cancelar la venta
  const cancelarVenta = () => {
    dispatch({
      type: CANCELAR_VENTA,
    });
  };

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
        intemsDetalleVenta: state.intemsDetalleVenta,
        mostrarDetalleVenta: state.mostrarDetalleVenta,
        clienteSeleccionado: state.clienteSeleccionado,
        vistaIngresar: state.vistaIngresar,
        obtenerProductosVenta,
        obtenerCedulaFactura,
        mostrarVistaVenta,
        obtenerItemsDetalleVentas,
        mostrarIngresarCliente,
        cerrarIngresarCliente,
        cancelarVenta,
      }}
    >
      {props.children}
    </VentasContext.Provider>
  );
};

export default VentasState;
