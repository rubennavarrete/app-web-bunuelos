import React, { useReducer } from "react";
import ProductosContext from "./productoContext";
import ProductosReducer from "./productoReducer";

import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";

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

const ProductosState = (props) => {
  const initialState = {
    productos: [],
    mostar: true,
    agregar: false,
    mostarEditar: false,
    cerrarEditar: false,
    actualizar: false,
    codigoObtenido: null,
    productoActualizar: null,
  };

  // Creando dispach y state
  const [state, dispatch] = useReducer(ProductosReducer, initialState);

  //Funciones para Productos state

  const obtenerCodigoProducto = (codigo) => {
    dispatch({
      type: OBTENER_CODIGO_PRODUCTO,
      payload: codigo,
    });
  };

  const obtenerProductoActualizar = (codigo) => {
    dispatch({
      type: OBTENER_PRODUCTO_ACTUALIZAR,
      payload: codigo,
    });
  };

  const mostrarEditarProducto = () => {
    dispatch({
      type: MOSTRAR_EDITAR_PRODUCTOS,
    });
  };

  const cerrarEditarProducto = () => {
    dispatch({
      type: CERRAR_EDITAR_PRODUCTOS,
    });
  };

  const mostrarActualizarProducto = () => {
    dispatch({
      type: MOSTRAR_ACTUALIZAR_PRODUCTO,
    });
  };

  //Funciones para el CRUD

  // Obtener todos los productos de la base de datos

  const obtenerProductos = async () => {
    try {
      const resultado = await clienteAxios.get("/api/productos");

      dispatch({
        type: OBTNER_PODUCTOS,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pudimos obtener la informacion de los Productos!",
      });
    }
  };

  // Metodo para agregar un productos a la base de datos
  const agregarProducto = async (producto) => {
    // Insertar al producto en el state
    try {
      const resultado = await clienteAxios.post("/api/productos", producto);

      dispatch({
        type: AGREGAR_PRODUCTO,
        payload: resultado.data,
      });

      Swal.fire({
        title: " Muy Bien",
        text: "Producto ingresado exitosamente",
        icon: "success",
        timer: "3000",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se puede agregar este producto!",
      });
    }
  };

  //Metodo para el input de busqueda
  const buscar = async (codigo) => {
    try {
      const resultado = await clienteAxios.get(
        `/api/productos/buscar/${codigo ? codigo : "null"}`
      );

      dispatch({
        type: OBTNER_PODUCTOS,
        payload: resultado.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El producto que buscas no existe!",
      });
    }
  };

  // Metodo para actualizar un producto

  const actualizarProducto = async (codigo) => {
    console.log(codigo);
    const datosA = {
      nombre: codigo.nombre,
      categoria: codigo.categoria,
      precio: parseFloat(codigo.precio),
      stock: parseInt(codigo.stock),
      fechElab: codigo.fechElab,
      foto: codigo.foto,
    };

    try {
      const resultado = await clienteAxios.put(
        `/api/productos/${codigo.codProducto}`,
        datosA
      );

      dispatch({
        type: ACTUALIZAR_PRODUCTO,
        payload: resultado.data,
      });

      Swal.fire({
        title: " Muy Bien",
        text: "Producto actualizado exitosamente",
        icon: "success",
        timer: "3000",
      });
    } catch (error) {
      console.log("error: ", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se puede actualizar la informacion de este producto!",
      });
    }
  };

  // Metodo para eliminar un producto por su codigo
  const eliminarProducto = async (codigo) => {
    try {
      const resultado = await clienteAxios.delete(`/api/productos/${codigo}`);
      console.log("resultado: ", resultado);
      console.log(resultado.data.msg);

      dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: codigo,
      });

      if (resultado.data.tipo === 1) {
        Swal.fire({
          title: " Alto",
          text: resultado.data.msg,
          icon: "warning",
          timer: "3000",
        });
      } else if (resultado.data.tipo === 2) {
        Swal.fire({
          title: " Muy Bien",
          text: resultado.data.msg,
          icon: "success",
          timer: "3000",
        });
      } else if (resultado.data.tipo === 3) {
        Swal.fire({
          title: " No encontrado",
          text: resultado.data.msg,
          icon: "error",
          timer: "3000",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se puede eliminar a este producto!",
      });
    }
  };

  return (
    <ProductosContext.Provider
      value={{
        productos: state.productos,
        codigoObtenido: state.codigoObtenido,
        mostar: state.mostar,
        agregar: state.agregar,
        mostarEditar: state.mostarEditar,
        cerrar: state.cerrarEditar,
        actualizar: state.actualizar,
        productoActualizar: state.productoActualizar,
        obtenerProductos,
        agregarProducto,
        buscar,
        actualizarProducto,
        obtenerCodigoProducto,
        obtenerProductoActualizar,
        mostrarEditarProducto,
        cerrarEditarProducto,
        mostrarActualizarProducto,
        eliminarProducto,
      }}
    >
      {props.children}
    </ProductosContext.Provider>
  );
};

export default ProductosState;
