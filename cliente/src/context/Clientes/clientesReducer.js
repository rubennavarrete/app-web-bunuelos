import {
  FORMULARIO_AGREGAR_CLIENTE,
  OBTENER_CLIENTES,
  CERRAR_AGREGAR_CLIENTE,
  AGREGAR_CLIENTE,
  MOSTRAR_ACTUALIZAR_CLIENTE,
  // ACTUALIZAR_CLIENTE,
  ELIMINAR_CLIENTE,
  OBTENER_CEDULA,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_AGREGAR_CLIENTE:
      return {
        ...state,
        agregarCliente: false,
        actualizarCliente: false,
      };
    case CERRAR_AGREGAR_CLIENTE:
      return {
        ...state,
        agregarCliente: true,
      };
    case MOSTRAR_ACTUALIZAR_CLIENTE:
      return {
        ...state,
        agregarCliente: false,
        cerrarAgregarCliente: false,
        actualizarCliente: true,
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
    case ELIMINAR_CLIENTE:
      return {
        ...state,
        clientes: state.clientes.filter(
          (cliente) => cliente.cedula !== action.payload
        ),
      };
    case OBTENER_CEDULA:
      return {
        ...state,
        cedulaObte: action.payload,
      };
    default:
      return state;
  }
};
