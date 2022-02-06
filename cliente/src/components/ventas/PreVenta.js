import React, { Fragment, useContext } from "react";

import DetalleVenta from "./DetalleVenta";

import Factura from "./Factura";

import VentasContext from "../../context/ventas/ventaContext";

import Editar from "../clientes/Editar";

import jwt_decode from "jwt-decode";

const PreVenta = () => {
  const ventasContext = useContext(VentasContext);

  const {
    mostrarDetalleVenta,
    vistaIngresar,
    numeroOrden,
    insertarDetalleVenta,
    intemsDetalleVenta,
    insertarOrdenCompra,
    valoresFactura,
    clienteSeleccionado,
  } = ventasContext;

  const token = localStorage.getItem("token");

  var decoded = jwt_decode(token);

  const hoy = new Date().toISOString().substring(0, 10);

  const insertarDetalle = () => {
    insertarOrdenCompra({
      tt: valoresFactura.tt,
      fech: hoy,
      cedulaCli: clienteSeleccionado.cedulaCli,
      nombreUS: decoded.usernameUS,
    });
    insertarDetalleVenta(intemsDetalleVenta);
    // setTimeout(() => insertarDetalleVenta(intemsDetalleVenta), 3000);
  };

  return (
    <Fragment>
      {mostrarDetalleVenta ? (
        <section className="cart_wrapper">
          <div className="cart_lists">
            <div className="cart_title">
              <div className="">
                <span className="material-icons-outlined">local_mall</span>
                Detalle de Venta
              </div>
              <div className="orden-factura">ODV-{numeroOrden}</div>
            </div>

            <DetalleVenta />
          </div>

          <div className="cart_details">
            <div className="cart_title">Factura</div>
            <div className="form_row">
              <Factura />
              <button className="btn" onClick={() => insertarDetalle()}>
                Vender
              </button>
            </div>
          </div>
        </section>
      ) : vistaIngresar ? (
        <Editar />
      ) : (
        <p className="mensaje-vistas">
          Para iniciar con la venta ingresa el numero de cedula del cliente!
        </p>
      )}
    </Fragment>
  );
};

export default PreVenta;
