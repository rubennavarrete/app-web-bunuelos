import React from "react";

const OrdenC = ({ ordenes }) => {
  return (
    <tr>
      <td>{ordenes.numOrden}</td>
      <td>{ordenes.valorTotal}</td>
      <td>{ordenes.fecha !== null ? ordenes.fecha.substring(0, 10) : null}</td>
      <td>{ordenes.cedulaCliente}</td>
      <td>{ordenes.usernameUsuario}</td>
    </tr>
  );
};

export default OrdenC;
