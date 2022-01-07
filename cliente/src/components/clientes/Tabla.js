import React from "react";

//css
import "./clientes.css";

const Tabla = ({ clientes }) => {
  return (
    <tr>
      <th>
        <input type="radio" name="my-input" id="radio" />
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
