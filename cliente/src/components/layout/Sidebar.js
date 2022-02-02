import React, { useContext } from "react";
// import Router from "react-router-dom";
import Swal from "sweetalert2";

import clientesContext from "../../context/Clientes/clientesContext";
import ProductosContext from "../../context/Productos/productoContext";
import VentasContext from "../../context/ventas/ventaContext";

import clienteAxios from "../../config/axios";
import ValidarCedula from "../../utils/validarCedula";

const Sidebar = ({ query }) => {
  // const router = useRouter();
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
  } = productoContext;

  //Obtener las funcnciones del context de Ventas
  const ventasContext = useContext(VentasContext);
  const { obtenerCedulaFactura, mostrarVistaVenta, mostrarIngresarCliente } =
    ventasContext;

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

  // Metodos para el componente de ventas

  const verificarCliente = () => {
    Swal.fire({
      title: "Cedula Identidad",
      text: "Ingrese la sedula del cliente para realizar la factura!",
      input: "number",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Verificar",
      showLoaderOnConfirm: true,
      preConfirm: async (ci) => {
        if (!ValidarCedula(ci)) {
          Swal.fire({
            title: "Ingresa una cedula valida",
            text: "La cedula no perteneacea a ninguna regin",
            icon: "warning",
            timer: "3000",
          });
          return;
        }

        const resultado = await clienteAxios.get(
          `/api/clientes/buscar/${ci ? ci : "null"}`
        );

        console.log("Longitud del Resultado: ", resultado.data.length);

        if (resultado.data.length === 0) {
          Swal.fire({
            title: "El cliente no existe en la base de datos",
            text: "Desea Registrar el cliente!",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Registrar",
            denyButtonText: "No registrar",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              mostrarIngresarCliente();
            } else if (result.isDenied) {
              return;
            }
          });
        } else {
          obtenerCedulaFactura(resultado.data[0]);

          Swal.fire({
            title: " Muy Bien",
            text: "Cliente verificado",
            icon: "success",
            timer: "2000",
          });

          mostrarVistaVenta();
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
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
          <button className="button button2" onClick={() => verificarCliente()}>
            Cedula del CLiente
          </button>
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
