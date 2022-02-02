import React, { useContext } from "react";
import ItemProductoFactura from "./ItemProductoFactura";

import VentasContext from "../../context/ventas/ventaContext";

import logo from "../../assets/Logo.svg";

const Factura = () => {
  const ventasContext = useContext(VentasContext);
  const { clienteSeleccionado } = ventasContext;

  return (
    <div className="paypal">
      <div className="paypal__header">
        <div className="paypal__logo-wrapper">
          <img src={logo} alt="Paypal" className="paypal__logo" />
        </div>

        <div className="paypal__header-info">
          <span className="paypal__date">25.04.2016</span>
          <span className="paypal__ref">0f-113</span>
        </div>
      </div>

      <div className="paypal__subheader-wrapper">
        <div className="paypal__subheader">
          <h1 className="paypal__username">{clienteSeleccionado.nombreCli}</h1>
          <span className="paypal__help-text">
            <p>CI:</p>
            <p>{clienteSeleccionado.cedulaCli}</p>
          </span>
          <span className="paypal__help-text">
            <p>Direccion:</p>
            <p>{clienteSeleccionado.direccionCli}</p>
          </span>
          <span className="paypal__help-text">
            <p>Telef:</p>
            <p>{clienteSeleccionado.celularCli}</p>
          </span>
        </div>
      </div>

      <div className="paypal__cart">
        <h2 className="paypal__cart-title">Productos:</h2>

        <ul className="paypal__cart-list">
          <div className="contenedor-iten-factura">
            <ItemProductoFactura />
            <ItemProductoFactura />
            <ItemProductoFactura />
            <ItemProductoFactura />
            <ItemProductoFactura />
          </div>

          <li className="paypal__cart-item">
            <div className="total-factura">
              <span className="paypal__cart-total">Subtotal:</span>
              <span className="paypal__item-price">$268.00</span>
            </div>
            <div className="total-factura">
              <span className="paypal__cart-total">Iva: 12%</span>
              <span className="paypal__item-price">$26.00</span>
            </div>
            <div className="total-factura">
              <span className="paypal__cart-total">Total:</span>
              <span className="paypal__item-price">$294.00</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="paypal__footer">
        <img
          src="https://i.ibb.co/c8CQvBq/barcode.png"
          alt="Paypal Barcode"
          className="paypal__barcode"
        />
      </div>
    </div>
  );
};

export default Factura;
