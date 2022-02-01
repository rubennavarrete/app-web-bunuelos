import React, { useContext } from "react";
import Swal from "sweetalert2";

import clientesContext from "../../context/Clientes/clientesContext";
import ProductosContext from "../../context/Productos/productoContext";

const Sidebar = ({ query }) => {
  //Obtener el stado de los botones

  //Obtener las funcnciones del context de Clientes
  const clienteContext = useContext(clientesContext);
  const {
    mostrarAgregarCliente,
    mostrarActualizarCliente,
    eliminarCliente,
    obtenerDatosActualizar,
    cedulaObte,
  } = clienteContext;

  //Obtener las funcnciones del context de Productos
  const productoContext = useContext(ProductosContext);
  const {
    eliminarProducto,
    codigoObtenido,
    obtenerProductoActualizar,
    mostrarEditarProducto,
    mostrarActualizarProducto,
    actualizar,
  } = productoContext;

  //Metodos para el el componente de Clientes

  //Función que se ejecuta cuando el usuario da click el boton de eliminar cliente
  const clienteEliminar = () => {
    if (cedulaObte !== null) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Está seguro?",
          text: "¡No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Eliminar este Cliente!",
          cancelButtonText: "Cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              eliminarCliente(cedulaObte),
              "Eliminado!",
              "Este cliente se ha eliminado.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelado",
              "El cliente no se elimino :)",
              "error"
            );
          }
        });
    } else {
      Swal.fire({
        title: "Seleccione un Cliente",
        text: "Asegúrese de haber seleccionado un cliente antes de realizar la acción ",
        icon: "warning",
      });
    }
  };

  //Función que se ejecuta cuando el usuario da click el boton de actualizar cliente
  const actualizarCliente = () => {
    if (cedulaObte !== null) {
      obtenerDatosActualizar(cedulaObte);
      mostrarActualizarCliente();
    } else {
      Swal.fire({
        title: "Seleccione un Cliente",
        text: "Asegúrese de haber seleccionado un cliente antes de realizar la acción ",
        icon: "warning",
      });
    }
  };

  // Metodos para el componente de Productos
  const productoEliminar = () => {
    if (codigoObtenido !== null) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Está seguro?",
          text: "¡No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Eliminar este Producto!",
          cancelButtonText: "Cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              eliminarProducto(codigoObtenido),
              "Eliminado!",
              "Este Producto se ha eliminado.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelado",
              "El Producto no se elimino! :)",
              "error"
            );
          }
        });
    } else {
      Swal.fire({
        title: "Seleccione un Producto",
        text: "Asegúrese de haber seleccionado un Producto antes de realizar la acción ",
        icon: "warning",
      });
    }
  };

  //Función que se ejecuta cuando el usuario da click el boton de actualizar Productos
  const actualizarProducto = () => {
    if (codigoObtenido !== null) {
      obtenerProductoActualizar(codigoObtenido);
      mostrarActualizarProducto();
    } else {
      Swal.fire({
        title: "Seleccione un Producto",
        text: "Asegúrese de haber seleccionado un Producto antes de realizar la acción ",
        icon: "warning",
      });
    }
  };

  const mostrarAgregarProducto = () => {
    mostrarEditarProducto();
  };

  switch (query) {
    case "/inicio":
      return "";

    case "/clientes":
      return (
        <div className="crud">
          <button
            className="button button2"
            onClick={() => mostrarAgregarCliente()}
          >
            Ingresar
          </button>
          <button
            className="button button2"
            onClick={() => actualizarCliente()}
          >
            Actualizar
          </button>
          <button className="button button2" onClick={() => clienteEliminar()}>
            Eliminar
          </button>
        </div>
      );

    case "/productos":
      return (
        <div className="crud">
          <button
            className="button button2"
            onClick={() => mostrarAgregarProducto()}
          >
            Ingresar
          </button>
          <button
            className="button button2"
            onClick={() => actualizarProducto()}
          >
            Actualizar
          </button>
          <button className="button button2" onClick={() => productoEliminar()}>
            Eliminar
          </button>
        </div>
      );

    case "/ventas":
      return (
        <div className="crud">
          <h2>Menu ventas</h2>;
        </div>
      );

    case "/reportes":
      return (
        <div className="crud">
          <h2>Menu reportes</h2>;
        </div>
      );

    default:
  }
};

export default Sidebar;
