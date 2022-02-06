import React, { useReducer } from "react";
import Swal from "sweetalert2";

import clienteAxios from "../../config/axios";

import reporteContext from "./reportesContext";
import reporteReducer from "./reportesReducer";
import {
  MOSTRAR_VISTA_REPORTE,
  OBTENER_NUMERO_REPORTE,
  OCULTAR_VISTA_REPORTE,
  OBTENER_CADUCADOS,
  OBTENER_PRODUCTOS_ACABARSE,
  OBTENER_CLIENTES_CUMPLEANEROS,
} from "../../types";

const ReporteState = (props) => {
  const initialState = {
    mostrarReporte: false,
    numeroReporte: null,
    octecnerCaducados: [],
    acabarse: [],
    cumpleaneros: [],
  };

  // Dispach para ejecutar las acciones
  const [state, dispach] = useReducer(reporteReducer, initialState);

  const mostrarVistaReporte = () => {
    dispach({
      type: MOSTRAR_VISTA_REPORTE,
    });
  };

  const ocultarVistaReporte = () => {
    dispach({
      type: OCULTAR_VISTA_REPORTE,
    });
  };

  const obtenerNumeroReporte = (num) => {
    dispach({
      type: OBTENER_NUMERO_REPORTE,
      payload: num,
    });
  };

  const obtenerProductosCaducados = async () => {
    try {
      const resultado = await clienteAxios.get("/api/reportes/caducados");
      console.log("resultado.data: ", resultado.data);

      dispach({
        type: OBTENER_CADUCADOS,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener la informacion los productos caducados!",
      });
    }
  };

  const obtnerPoductosAcabarse = async () => {
    try {
      const resultado = await clienteAxios.get("/api/reportes/acabarse");
      console.log("resultado.data: ", resultado.data);

      dispach({
        type: OBTENER_PRODUCTOS_ACABARSE,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener la informacion los Productos por acabarse!",
      });
    }
  };

  const obtenerClientesCumpleaneros = async () => {
    try {
      const resultado = await clienteAxios.get("/api/reportes/cumple");
      console.log("resultado.data: ", resultado.data);

      dispach({
        type: OBTENER_CLIENTES_CUMPLEANEROS,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener la informacion los clientes cumpleañeros!",
      });
    }
  };

  return (
    <reporteContext.Provider
      value={{
        mostrarReporte: state.mostrarReporte,
        numeroReporte: state.numeroReporte,
        octecnerCaducados: state.octecnerCaducados,
        acabarse: state.acabarse,
        cumpleaneros: state.cumpleaneros,
        mostrarVistaReporte,
        obtenerNumeroReporte,
        ocultarVistaReporte,
        obtenerProductosCaducados,
        obtnerPoductosAcabarse,
        obtenerClientesCumpleaneros,
      }}
    >
      {props.children}
    </reporteContext.Provider>
  );
};

export default ReporteState;
