import React from "react";

const MasVendidos = ({ mas }) => {
  const formatMoney = (prev_price) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const precio_usd = formatter.format(prev_price);
    return precio_usd;
  };
  return (
    <tr>
      <td>{mas.Cantidad}</td>
      <td>{mas.codProd}</td>
      <td>{mas.Nombre}</td>
      <td>{formatMoney(mas.Ganancia)}</td>
    </tr>
  );
};

export default MasVendidos;
