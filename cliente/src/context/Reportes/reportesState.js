import React, { useReducer } from "react";

import reporteContext from "./reportesContext";
import reporteReducer from "./reportesReducer";
import {
  MOSTRAR_VISTA_REPORTE,
  OBTENER_NUMERO_REPORTE,
  OCULTAR_VISTA_REPORTE,
} from "../../types";

const ReporteState = (props) => {
  const initialState = {
    mostrarReporte: false,
    numeroReporte: null,
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

  return (
    <reporteContext.Provider
      value={{
        mostrarReporte: state.mostrarReporte,
        numeroReporte: state.numeroReporte,
        mostrarVistaReporte,
        obtenerNumeroReporte,
        ocultarVistaReporte,
      }}
    >
      {props.children}
    </reporteContext.Provider>
  );
};

export default ReporteState;
