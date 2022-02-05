import {
  MOSTRAR_VISTA_REPORTE,
  OBTENER_NUMERO_REPORTE,
  OCULTAR_VISTA_REPORTE,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case MOSTRAR_VISTA_REPORTE:
      return {
        ...state,
        mostrarReporte: true,
      };
    case OCULTAR_VISTA_REPORTE:
      return {
        ...state,
        mostrarReporte: false,
      };
    case OBTENER_NUMERO_REPORTE:
      return {
        ...state,
        numeroReporte: action.payload,
      };
    default:
      return state;
  }
};
