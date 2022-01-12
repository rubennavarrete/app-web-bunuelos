import React, { useReducer } from "react";

import clienteContext from "./clientesContext";
import clientesReducer from "./clientesReducer";
import {
  FORMULARIO_AGREGAR_CLIENTE,
  CERRAR_AGREGAR_CLIENTE,
  OBTENER_CLIENTES,
  AGREGAR_CLIENTE,
} from "../../types";

const ClienteState = (props) => {
  const clientes = [
    {
      cedula: "0302304342",
      nombre: "Perea Salasar",
      direccion: "Santa Marianita",
      telefono: "0934345843",
      correo: "b@b.com",
      fecha: "2000-02-23",
    },
    {
      cedula: "0604855866",
      nombre: "Santy Guaylla",
      direccion: "España",
      telefono: "0984242647",
      correo: "santyguaylla@gmail.com",
      fecha: "2000-12-31",
    },
    {
      cedula: "0803051150",
      nombre: "Ruben Valencia",
      direccion: "Av 11 de noviembre",
      telefono: "0962739354",
      correo: "rd_navarrete@outlook.com",
      fecha: "1987-12-09",
    },
    {
      cedula: "0803229525",
      nombre: "Luis Robles",
      direccion: "En la esquina",
      telefono: "0948567363",
      correo: "a@a.com",
      fecha: "2000-01-01",
    },
    {
      cedula: "0803229533",
      nombre: "Leonel Robles",
      direccion: "Tonsupa",
      telefono: "0934873461",
      correo: "b@b.ec",
      fecha: "2000-01-02",
    },
    {
      cedula: "0834237467",
      nombre: "Milton Cava",
      direccion: "Sucre y Mexico",
      telefono: "0923473234",
      correo: "dsf@wer.com",
      fecha: "",
    },
    {
      cedula: "1234567890",
      nombre: "Anastasia Gonzales",
      direccion: "Milton Reyes y la 11",
      telefono: "0981748550",
      correo: "ansgzls@gmail.com",
      fecha: "2000-01-03",
    },
    {
      cedula: "1712886470",
      nombre: "Angela Zambrano",
      direccion: "El Carmen",
      telefono: "092145697",
      correo: "zamangel@gmail.com",
      fecha: "1985-01-03",
    },
  ];

  const initialState = {
    clientes: [],
    agregarCliente: true,
    cerrarAgregarCliente: false,
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

  // Funciones para el CRUD

  // Agregar un nuevo cliente
  const agregarCliente = (clientes) => {
    // Insertar el proyecto en el state
    dispach({
      type: AGREGAR_CLIENTE,
      payload: clientes,
    });
  };

  // Obtener los datos de clientes
  const obtenerClientes = () => {
    dispach({
      type: OBTENER_CLIENTES,
      payload: clientes,
    });
  };

  return (
    <clienteContext.Provider
      value={{
        clientes: state.clientes,
        agregar: state.agregarCliente,
        mostrarAgregarCliente,
        cerrarAgregarCliente,
        obtenerClientes,
        agregarCliente,
      }}
    >
      {props.children}
    </clienteContext.Provider>
  );
};

export default ClienteState;
