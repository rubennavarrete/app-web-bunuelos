import {
  OBTNER_PODUCTOS,
  OBTENER_PRODUCTO_ACTUALIZAR,
  AGREGAR_PRODUCTO,
  OBTENER_CODIGO_PRODUCTO,
  ELIMINAR_PRODUCTO,
  MOSTRAR_EDITAR_PRODUCTOS,
  CERRAR_EDITAR_PRODUCTOS,
  MOSTRAR_ACTUALIZAR_PRODUCTO,
  ACTUALIZAR_PRODUCTO,
} from "../../types";
export default (state, action) => {
  switch (action.type) {
    case OBTNER_PODUCTOS:
      return {
        ...state,
        productos: action.payload,
        mostarEditar: false,
        cerrarEditar: false,
        actualizar: false,
        mostar: true,
      };
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
        mostarEditar: false,
        agregar: true,
      };
    case OBTENER_CODIGO_PRODUCTO:
      return {
        ...state,
        codigoObtenido: action.payload,
      };
    case OBTENER_PRODUCTO_ACTUALIZAR:
      return {
        ...state,
        productoActualizar: state.productos.filter(
          (producto) => producto.codProducto === action.payload
        ),
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.codProducto !== action.payload
        ),
        codigoObtenido: null,
      };
    case MOSTRAR_EDITAR_PRODUCTOS:
      return {
        ...state,
        mostar: false,
        mostarEditar: true,
        cerrarEditar: false,
        actualizar: false,
      };
    case CERRAR_EDITAR_PRODUCTOS:
      return {
        ...state,
        mostar: true,
        mostarEditar: false,
        cerrarEditar: true,
        actualizar: false,
      };
    case MOSTRAR_ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        mostar: false,
        mostarEditar: false,
        cerrarEditar: false,
        agregar: false,
        actualizar: true,
      };
    case ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
        actualizar: false,
        mostar: true,
      };
    default:
      return state;
  }
};
