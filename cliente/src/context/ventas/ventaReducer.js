import {
  OVTENER_PRODUCTOS_VEMTA,
  MOSTRAR_DETALLE_VENTA,
  CEDULA_CLIENTE,
  ITEMS_DETALLE_VENTA,
  MOSTRAR_INGRESAR_CLIENTE,
  CERRAR_INGRESAR_CLIENTE,
  CANCELAR_VENTA,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OVTENER_PRODUCTOS_VEMTA:
      return {
        ...state,
        productosVenta: action.payload,
      };
    case CEDULA_CLIENTE:
      return {
        ...state,
        clienteSeleccionado: action.payload,
        vistaIngresar: false,
        mostrarDetalleVenta: true,
      };
    case MOSTRAR_DETALLE_VENTA:
      return {
        ...state,
        mostrarDetalleVenta: true,
        vistaIngresar: false,
      };
    case ITEMS_DETALLE_VENTA:
      return {
        ...state,
      };
    case MOSTRAR_INGRESAR_CLIENTE:
      return {
        ...state,
        vistaIngresar: true,
        mostrarDetalleVenta: false,
      };
    case CERRAR_INGRESAR_CLIENTE:
      return {
        ...state,
        vistaIngresar: false,
      };
    case CANCELAR_VENTA:
      return {
        ...state,
        mostrarDetalleVenta: false,
        clienteSeleccionado: [],
      };
    default:
      return state;
  }
};
