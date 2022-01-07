import React, { useContext } from "react";

import clientesContext from "../../context/Clientes/clientesContext";

const Sidebar = ({ query }) => {
  //Obtener el stado del boton agregar
  const clienteContext = useContext(clientesContext);
  const { mostrarAgregarCliente } = clienteContext;
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
          <button className="button button2">Modificar</button>
          <button className="button button2">Eliminar</button>
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
