import React, { useContext } from "react";
import clientesContext from "../../context/Clientes/clientesContext";

//css
import "./clientes.css";

const Tabla = ({ clientes }) => {
  //Obtener las funcnciones del context de clientes
  const clienteContext = useContext(clientesContext);
  const { obtenerCedulaCliente } = clienteContext;

  const capturarCedula = (clientes) => {
    obtenerCedulaCliente(clientes.cedula);
  };

  return (
    <tr>
      <th>
        <input
          type="radio"
          name="my-input"
          id="radio"
          onClick={() => capturarCedula(clientes)}
        />
      </th>
      <td>{clientes.cedula}</td>
      <td>{clientes.nombre}</td>
      <td>{clientes.direccion}</td>
      <td>{clientes.telefono}</td>
      <td>{clientes.correo}</td>
      <td>{clientes.fecha}</td>
    </tr>
  );
};

export default Tabla;
