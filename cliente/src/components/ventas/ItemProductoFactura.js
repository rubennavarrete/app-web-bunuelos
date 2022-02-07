import React from "react";

const ItemProductoFactura = ({ intemsDetalleVenta }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const precioTP = formatter.format(intemsDetalleVenta.pTotal);

  return (
    <li className="paypal__cart-item">
      <div className="contenedor-detalle">
        <span className="paypal__item-name">{intemsDetalleVenta.nombre}</span>
        <span className="paypal__index">{intemsDetalleVenta.count}</span>
        <span className="paypal__item-price">{precioTP}</span>
      </div>
    </li>
  );
};

export default ItemProductoFactura;
