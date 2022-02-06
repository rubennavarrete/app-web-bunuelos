import {
  OBTENER_CAJA,
  OBTENER_CLIENTES_TOTALES,
  OBTENER_TOTAL_VENTA,
  OBTENER_NUMERO_PRODUCTOS,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_CAJA:
      return {
        ...state,
        cajaHoy: action.payload,
      };
    case OBTENER_CLIENTES_TOTALES:
      return {
        ...state,
        clientesTotales: action.payload,
      };
    case OBTENER_TOTAL_VENTA:
      return {
        ...state,
        totalVenta: action.payload,
      };
    case OBTENER_NUMERO_PRODUCTOS:
      return {
        ...state,
        numeroProductos: action.payload,
      };
    default:
      return state;
  }
};
