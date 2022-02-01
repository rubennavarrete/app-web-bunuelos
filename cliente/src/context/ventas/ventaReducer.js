import { OVTENER_PRODUCTOS_VEMTA } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OVTENER_PRODUCTOS_VEMTA:
      return {
        ...state,
        productosVenta: action.payload,
      };
    default:
      return state;
  }
};
