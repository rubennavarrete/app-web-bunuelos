import { FORMULARIO_AGREGAR_CLIENTE } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_AGREGAR_CLIENTE:
      return {
        ...state,
        agregarCliente: false,
      };
    default:
      return state;
  }
};
