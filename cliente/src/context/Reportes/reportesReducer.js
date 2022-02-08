import {
  MOSTRAR_VISTA_REPORTE,
  OBTENER_NUMERO_REPORTE,
  OCULTAR_VISTA_REPORTE,
  OBTENER_CADUCADOS,
  OBTENER_PRODUCTOS_ACABARSE,
  OBTENER_CLIENTES_CUMPLEANEROS,
  OBTENER_ORDEN_COMPRA,
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
    case OBTENER_CADUCADOS:
      return {
        ...state,
        octecnerCaducados: action.payload,
      };
    case OBTENER_PRODUCTOS_ACABARSE:
      return {
        ...state,
        acabarse: action.payload,
      };
    case OBTENER_CLIENTES_CUMPLEANEROS:
      return {
        ...state,
        cumpleaneros: action.payload,
      };
    case OBTENER_ORDEN_COMPRA:
      return {
        ...state,
        ordenCompra: action.payload,
      };
    default:
      return state;
  }
};
