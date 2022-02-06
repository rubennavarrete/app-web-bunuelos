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
  ACTUALIZAR_DETALLE_VENTA,
  ELIMINAR_ITEMS,
  VALORES_FACTURA,
  OBTENER_NUMERO_ORDEN,
  INSERTAR_ORDEN_COMPRA,
} from "../../types";

const VentasState = (props) => {
  const initialState = {
    productosVenta: [],
    mostrarDetalleVenta: false,
    clienteSeleccionado: null,
    intemsDetalleVenta: [],
    valoresFactura: 0,
    vistaIngresar: false,
    numeroOrden: null,
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
  const obtenerItemsDetalleVentas = (productosVenta) => {
    dispatch({
      type: ITEMS_DETALLE_VENTA,
      payload: productosVenta,
    });
  };

  // Obtener los valores de iva, subtotal y total para el detalle de factura
  const obtenerValoresFactura = (valores) => {
    dispatch({
      type: VALORES_FACTURA,
      payload: valores,
    });
  };

  // Cancelar la venta
  const cancelarVenta = () => {
    dispatch({
      type: CANCELAR_VENTA,
    });
  };

  // Refrescamos la vista de detalle venta cada vez que agregamos un productos
  const actualizarDetalleVenta = () => {
    dispatch({
      type: ACTUALIZAR_DETALLE_VENTA,
    });
  };

  // Metodo para elimina intenms del detalle de ventas
  const eliminarItems = (intemsDetalleVenta) => {
    dispatch({
      type: ELIMINAR_ITEMS,
      payload: intemsDetalleVenta,
    });
  };

  //Funciones para el CRUD

  // Obtener todos los productos de la base de datos

  const obtenerProductosVenta = async () => {
    try {
      const resultado = await clienteAxios.get("/api/ventas");

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

  // Funcion para obtener numero de orden de compra
  const obtenerNumeroOrden = async () => {
    try {
      const resultado = await clienteAxios.get("/api/ventas/NumOC");
      console.log("resultado.data: ", resultado.data.OC + 1);

      dispatch({
        type: OBTENER_NUMERO_ORDEN,
        payload: resultado.data.OC + 1,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener el número de orden de compra!",
      });
    }
  };

  //Obtencion e insercion del orden de compra
  const insertarOrdenCompra = async (insOrdenCompra) => {
    console.log("insDetVenta: ", insOrdenCompra);
  };

  //Obtencion e insercion del detalle de ventas de compra
  const insertarDetalleVenta = async (insDetVenta) => {
    console.log("insDetVenta: ", insDetVenta);
    // try {
    //   const resultado = await clienteAxios.post(
    //     "/api/ventas/insertarDv",
    //     insDetVenta
    //   );
    //   console.log("Insertar detalle: ", resultado.data);
    //   dispatch({
    //     type: INSERTAR_ORDEN_COMPRA,
    //     payload: resultado.data,
    //   });
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "No pudimos insertar los datos en la tabla detalle de venta!",
    //   });
    // }
  };

  return (
    <VentasContext.Provider
      value={{
        state,
        bloquear: state.bloquear,
        productosVenta: state.productosVenta,
        intemsDetalleVenta: state.intemsDetalleVenta,
        mostrarDetalleVenta: state.mostrarDetalleVenta,
        clienteSeleccionado: state.clienteSeleccionado,
        vistaIngresar: state.vistaIngresar,
        valoresFactura: state.valoresFactura,
        numeroOrden: state.numeroOrden,
        obtenerProductosVenta,
        obtenerCedulaFactura,
        mostrarVistaVenta,
        obtenerItemsDetalleVentas,
        mostrarIngresarCliente,
        cerrarIngresarCliente,
        cancelarVenta,
        actualizarDetalleVenta,
        eliminarItems,
        obtenerValoresFactura,
        obtenerNumeroOrden,
        insertarDetalleVenta,
      }}
    >
      {props.children}
    </VentasContext.Provider>
  );
};

export default VentasState;
