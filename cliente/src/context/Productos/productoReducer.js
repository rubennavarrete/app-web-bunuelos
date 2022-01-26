import { OBTNER_PODUCTOS } from "../../types";
export default (state, action) => {
  switch (action.type) {
    case OBTNER_PODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };
    default:
      return state;
  }
};
