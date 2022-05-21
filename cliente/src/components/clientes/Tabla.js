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
      <td>{clientes.cedulacli}</td>
      <td>{clientes.nombrecli}</td>
      <td>{clientes.direccioncli}</td>
      <td>{clientes.celularcli}</td>
      <td>{clientes.correocli}</td>
      <td>
        {clientes.fechnac !== null ? clientes.fechnac.substring(0, 10) : null}
      </td>
    </tr>
  );
};

export default Tabla;
