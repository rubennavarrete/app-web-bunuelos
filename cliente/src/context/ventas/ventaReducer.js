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

export default (state, action) => {
  switch (action.type) {
    case OVTENER_PRODUCTOS_VEMTA:
      return {
        ...state,
        productosVenta: action.payload,
      };
    case OBTENER_NUMERO_ORDEN:
      return {
        ...state,
        numeroOrden: action.payload,
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
        intemsDetalleVenta: [...state.intemsDetalleVenta, action.payload],
      };
    case ELIMINAR_ITEMS:
      return {
        ...state,
        intemsDetalleVenta: state.intemsDetalleVenta.filter(
          (item) => item.codProducto !== action.payload
        ),
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
      const nuevaLista = state.productosVenta.map((item, index) => {
        return {
          ...item,
          clienteSeleccionado: null,
          seleccionado: false,
        };
      });
      return {
        ...state,
        mostrarDetalleVenta: false,
        clienteSeleccionado: null,
        intemsDetalleVenta: [],
        productosVenta: nuevaLista,
        valoresFactura: 0,
      };
    case ACTUALIZAR_DETALLE_VENTA:
      return {
        ...state,
      };
    case VALORES_FACTURA:
      return {
        ...state,
        valoresFactura: action.payload,
      };
    case INSERTAR_ORDEN_COMPRA:
      return { ...state };
    default:
      return state;
  }
};
