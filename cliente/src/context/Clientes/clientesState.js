import React, { useReducer } from "react";

import clienteContext from "./clientesContext";
import clientesReducer from "./clientesReducer";
import {
  FORMULARIO_AGREGAR_CLIENTE,
  CERRAR_AGREGAR_CLIENTE,
  OBTENER_CLIENTES,
  AGREGAR_CLIENTE,
  OBTENER_DATOS_ACTUALIZAR,
  MOSTRAR_ACTUALIZAR_CLIENTE,
  ACTUALIZAR_CLIENTE,
  ELIMINAR_CLIENTE,
  OBTENER_CEDULA,
} from "../../types";

import clienteAxios from "../../config/axios";

const ClienteState = (props) => {
  const initialState = {
    clientes: [],
    agregarCliente: true,
    cerrarAgregarCliente: false,
    mostrarActualizarCliente: false,
    cedulaObte: null,
    datoActualizar: null,
  };

  // Dispach para ejecutar las acciones
  const [state, dispach] = useReducer(clientesReducer, initialState);

  // Funciones para los formularios
  const mostrarAgregarCliente = () => {
    dispach({
      type: FORMULARIO_AGREGAR_CLIENTE,
    });
  };

  const cerrarAgregarCliente = () => {
    dispach({
      type: CERRAR_AGREGAR_CLIENTE,
    });
  };

  const mostrarActualizarCliente = () => {
    dispach({
      type: MOSTRAR_ACTUALIZAR_CLIENTE,
    });
  };

  const obtenerDatosActualizar = (ci) => {
    dispach({
      type: OBTENER_DATOS_ACTUALIZAR,
      payload: ci,
    });
  };

  // Funciones para el CRUD

  // Obtener los datos de clientes
  const obtenerClientes = async () => {
    try {
      const resultado = await clienteAxios.get("/api/clientes");

      dispach({
        type: OBTENER_CLIENTES,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerCedulaCliente = (cedula) => {
    dispach({
      type: OBTENER_CEDULA,
      payload: cedula,
    });
  };

  // Agregar un nuevo cliente
  const agregarCliente = async (clientes) => {
    // Insertar al cliente en el state

    try {
      const resultado = await clienteAxios.post("/api/clientes", clientes);
      console.log(resultado);

      dispach({
        type: AGREGAR_CLIENTE,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Edita o modica un cliente
  const actualizarCliente = async (ci) => {
    console.log("ci", ci.cedulaCli);

    try {
      const resultado = await clienteAxios.put(
        `/api/clientes/${ci.cedulaCli}`,
        ci
      );
      console.log("resultado", resultado);
      dispach({
        type: ACTUALIZAR_CLIENTE,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Eliminar un cliente por su numero de cedula
  const eliminarCliente = async (ci) => {
    try {
      await clienteAxios.delete(`/api/clientes/${ci}`);

      dispach({
        type: ELIMINAR_CLIENTE,
        payload: ci,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <clienteContext.Provider
      value={{
        state,
        dispach,
        clientes: state.clientes,
        agregar: state.agregarCliente,
        mostarActualizar: state.mostrarActualizarCliente,
        cedulaObte: state.cedulaObte,
        datoActualizar: state.datoActualizar,
        mostrarAgregarCliente,
        cerrarAgregarCliente,
        mostrarActualizarCliente,
        obtenerClientes,
        agregarCliente,
        actualizarCliente,
        obtenerCedulaCliente,
        obtenerDatosActualizar,
        eliminarCliente,
      }}
    >
      {props.children}
    </clienteContext.Provider>
  );
};

export default ClienteState;
