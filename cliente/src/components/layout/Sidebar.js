import React, { useContext } from "react";
import swal from "sweetalert";

import clientesContext from "../../context/Clientes/clientesContext";

const Sidebar = ({ query }) => {
  //Obtener el stado de los botones
  const clienteContext = useContext(clientesContext);
  const {
    mostrarAgregarCliente,
    mostrarActualizarCliente,
    eliminarCliente,
    obtenerDatosActualizar,
    cedulaObte,
  } = clienteContext;

  //Función que se ejecuta cuando el usuario elimina el boton de eliminar cliente
  const clienteEliminar = () => {
    if (cedulaObte !== null) {
      eliminarCliente(cedulaObte);
      swal({
        title: " Muy Bien",
        text: "Cliente eliminado exitosamente",
        icon: "success",
        timer: "3000",
      });
    } else {
      swal({
        title: "Seleccione un Cliente",
        text: "Asegúrese de haber seleccionado un cliente antes de realizar la acción ",
        icon: "warning",
        button: "Aceptar",
      });
    }
  };

  const actualizar = () => {
    if (cedulaObte !== null) {
      obtenerDatosActualizar(cedulaObte);
      mostrarActualizarCliente();
    } else {
      swal({
        title: "Seleccione un Cliente",
        text: "Asegúrese de haber seleccionado un cliente antes de realizar la acción ",
        icon: "warning",
        button: "Aceptar",
      });
    }
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
          <button className="button button2" onClick={() => actualizar()}>
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
          <h2>Ingresar</h2>
          <h2>Modificar</h2>
          <h2>Eliminar</h2>
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
