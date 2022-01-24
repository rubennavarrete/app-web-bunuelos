import React, { useContext } from "react";
import clientesContext from "../../context/Clientes/clientesContext";

//css
import "./clientes.css";

const Tabla = ({ clientes }) => {
  //Obtener las funcnciones del context de clientes
  const clienteContext = useContext(clientesContext);
  const { obtenerCedulaCliente } = clienteContext;

  const capturarCedula = (clientes) => {
    obtenerCedulaCliente(clientes.cedulaCli);
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
      <td>{clientes.cedulaCli}</td>
      <td>{clientes.nombreCli}</td>
      <td>{clientes.direccionCli}</td>
      <td>{clientes.celularCli}</td>
      <td>{clientes.correoCli}</td>
      <td>
        {clientes.fechNac !== null ? clientes.fechNac.substring(0, 10) : null}
      </td>
    </tr>
  );
};

export default Tabla;
