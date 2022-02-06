import React, { useContext } from "react";
import ItemProductoFactura from "./ItemProductoFactura";

import VentasContext from "../../context/ventas/ventaContext";

import logo from "../../assets/Logo.svg";

const Factura = () => {
  const ventasContext = useContext(VentasContext);
  const {
    clienteSeleccionado,
    intemsDetalleVenta,
    valoresFactura,
    numeroOrden,
  } = ventasContext;

  const hoy = new Date().toISOString().substring(0, 10);

  const formatMoney = (prev_price) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const precio_usd = formatter.format(prev_price);
    return precio_usd;
  };

  return (
    <div className="paypal">
      <div className="paypal__header">
        <div className="paypal__logo-wrapper">
          <img src={logo} alt="Paypal" className="paypal__logo" />
        </div>

        <div className="paypal__header-info">
          <span className="paypal__date">{hoy}</span>
          <span className="paypal__ref">Of-{numeroOrden}</span>
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
            {intemsDetalleVenta.length > 0 ? (
              intemsDetalleVenta.map((item) => {
                return (
                  <ItemProductoFactura
                    key={item.codProducto}
                    intemsDetalleVenta={item}
                  />
                );
              })
            ) : (
              <p className="">Seleccione los productos!</p>
            )}
          </div>

          <li className="paypal__cart-item">
            <div className="total-factura">
              <span className="paypal__cart-total">Subtotal:</span>
              <span className="paypal__item-price">
                {!isNaN(valoresFactura) ? 0 : formatMoney(valoresFactura.sub)}
              </span>
            </div>
            <div className="total-factura">
              <span className="paypal__cart-total">
                Iva: {valoresFactura.iv} %
              </span>
              <span className="paypal__item-price">
                {!isNaN(valoresFactura) ? 0 : formatMoney(valoresFactura.clI)}
              </span>
            </div>
            <div className="total-factura">
              <span className="paypal__cart-total">Total:</span>
              <span className="paypal__item-price">
                {!isNaN(valoresFactura) ? 0 : formatMoney(valoresFactura.tt)}
              </span>
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
