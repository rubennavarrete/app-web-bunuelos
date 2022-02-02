import React, { Fragment, useContext, useEffect } from "react";

import ItenProductoVenta from "./ItemProductoVenta";

import VentasContext from "../../context/ventas/ventaContext";

const DetalleVenta = () => {
  const ventasContext = useContext(VentasContext);
  const { cancelarVenta } = ventasContext;

  return (
    <Fragment>
      <div className="contenedor-header-detalle-venta">
        <p>Producto</p>
        <p>P. Unitario</p>
        <p>Cantidad</p>
        <p>P. Total</p>
      </div>
      <div className="cart_list_wrap">
        <div className="cart_responsive">
          <ItenProductoVenta />
          <ItenProductoVenta />
          <ItenProductoVenta />
          <ItenProductoVenta />
          <ItenProductoVenta />
        </div>
        <div className="footer">
          <div className="back_cart"></div>
          <div className="subtotal">
            <label>Subtotal: </label>
            <strong>$24.50</strong>
          </div>
          <div className="subtotal">
            <label>Iva: 12%</label>
            <strong>$2.50</strong>
          </div>
          <div className="subtotal">
            <label>Total: </label>
            <strong>$27.00</strong>
          </div>
        </div>
      </div>
      <div className="contenedor-boton-cancelar">
        <button class="cart-button" onClick={() => cancelarVenta()}>
          Cancelar Venta
        </button>
      </div>
    </Fragment>
  );
};

export default DetalleVenta;
