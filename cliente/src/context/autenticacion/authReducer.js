import { LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
        mensaje: null,
        cargando: false,
      };
    case CERRAR_SESION:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        usuario: null,
        autenticado: null,
        mensaje: action.payload,
        cargando: false,
      };

    default:
      return state;
  }
};
