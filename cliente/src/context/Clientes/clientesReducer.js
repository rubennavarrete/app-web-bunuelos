import {
  FORMULARIO_AGREGAR_CLIENTE,
  OBTENER_CLIENTES,
  CERRAR_AGREGAR_CLIENTE,
  AGREGAR_CLIENTE,
  MOSTRAR_ACTUALIZAR_CLIENTE,
  ACTUALIZAR_CLIENTE,
  ELIMINAR_CLIENTE,
  OBTENER_CEDULA,
  OBTENER_DATOS_ACTUALIZAR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_AGREGAR_CLIENTE:
      return {
        ...state,
        agregarCliente: false,
        mostrarActualizarCliente: false,
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
        mostrarActualizarCliente: true,
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
    case ACTUALIZAR_CLIENTE:
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
        cedulaObte: null,
      };
    case OBTENER_CEDULA:
      return {
        ...state,
        cedulaObte: action.payload,
      };
    case OBTENER_DATOS_ACTUALIZAR:
      return {
        ...state,
        datoActualizar: state.clientes.filter(
          (cliente) => cliente.cedulaCli === action.payload
        ),
      };
    default:
      return state;
  }
};
