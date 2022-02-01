import React from "react";

import DetalleVenta from "./DetalleVenta";

import Factura from "./Factura";

const PreVenta = () => {
  return (
    <section className="cart_wrapper">
      <div className="cart_lists">
        <div className="cart_title">
          <span className="material-icons-outlined">local_mall</span>
          Detalle de Venta
        </div>

        <DetalleVenta />
      </div>

      <div className="cart_details">
        <div className="cart_title">Factura</div>
        <div className="form_row">
          <Factura />
          <button className="btn">Vender</button>
        </div>
      </div>
    </section>
  );
};

export default PreVenta;
