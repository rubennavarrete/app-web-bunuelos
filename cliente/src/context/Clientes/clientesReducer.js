import {
  FORMULARIO_AGREGAR_CLIENTE,
  OBTENER_CLIENTES,
  CERRAR_AGREGAR_CLIENTE,
  AGREGAR_CLIENTE,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_AGREGAR_CLIENTE:
      return {
        ...state,
        agregarCliente: false,
      };
    case CERRAR_AGREGAR_CLIENTE:
      return {
        ...state,
        agregarCliente: true,
      };
    case OBTENER_CLIENTES:
      return {
        ...state,
        clientes: action.payload,
      };
    case AGREGAR_CLIENTE:
      return {
        ...state,
        clientes: [...state.clientes, action.payload],
        agregarCliente: true,
      };
    default:
      return state;
  }
};
