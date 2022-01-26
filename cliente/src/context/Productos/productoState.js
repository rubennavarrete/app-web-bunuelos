import React, { useReducer } from "react";
import ProductosContext from "./productoContext";
import ProductosReducer from "./productoReducer";

import swal from "sweetalert";
import clienteAxios from "../../config/axios";

import { OBTNER_PODUCTOS } from "../../types";

const ProductosState = (props) => {
  const initialState = {
    productos: [],
  };

  // Creando dispach y state
  const [state, dispatch] = useReducer(ProductosReducer, initialState);

  //Funciones para Productos state

  // Obtener todos los productos de la base de datos

  const obtenerProductos = async () => {
    try {
      const resultado = await clienteAxios.get("/api/productos");

      dispatch({
        type: OBTNER_PODUCTOS,
        payload: resultado.data,
      });
    } catch (error) {
      swal("¡Ups!", "No pudimos obtener la informacion los Productos", "error");
    }
  };

  //Metodo para el input de busqueda
  const buscar = async (codigo) => {
    try {
      const resultado = await clienteAxios.get(
        `/api/productos/buscar/${codigo ? codigo : "null"}`
      );
      console.log("% resultado Buscar %: ", resultado);
      dispatch({
        type: OBTNER_PODUCTOS,
        payload: resultado.data,
      });
    } catch (error) {
      swal("¡Ups!", "El producto que buscas no existe!", "error");
    }
  };

  return (
    <ProductosContext.Provider
      value={{
        productos: state.productos,
        obtenerProductos,
        buscar,
      }}
    >
      {props.children}
    </ProductosContext.Provider>
  );
};

export default ProductosState;
