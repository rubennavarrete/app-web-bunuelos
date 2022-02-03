import React, { useState, useEffect, useContext } from "react";
import VentasContext from "../../context/ventas/ventaContext";

const ItenProductoVenta = ({ intemsDetalleVenta }) => {
  const ventasContext = useContext(VentasContext);
  const { actualizarDetalleVenta } = ventasContext;

  let [cantidad, guardarCantidad] = useState(1);
  let [total, guardarTotal] = useState(intemsDetalleVenta.precio);

  // useEffect(() => {
  //   precioTotal();
  // }, [cantidad]);

  const aumentar = () => {
    cantidad++;
    guardarCantidad(cantidad);
    guardarTotal(cantidad * intemsDetalleVenta.precio);
    actualizarDetalleVenta();
  };

  const disminuir = () => {
    if (cantidad !== 1) {
      cantidad--;
      guardarCantidad(cantidad);
      guardarTotal(cantidad * intemsDetalleVenta.precio);
      actualizarDetalleVenta();
    } else {
      cantidad = 1;
    }
  };

  // const precioTotal = () => {
  //   total = cantidad * intemsDetalleVenta.precio;
  //   guardarTotal(total);
  // };

  intemsDetalleVenta.count = cantidad;
  intemsDetalleVenta.pTotal = total;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const precio_usd = formatter.format(intemsDetalleVenta.precio);

  const preciototal = formatter.format(total);

  return (
    <div className="tr_item">
      <div className="td_item item_img">
        <img src={intemsDetalleVenta.fotoUrl} alt="" />
      </div>
      <div className="td_item item_name">
        <label className="main">{intemsDetalleVenta.nombre}</label>
      </div>
      <div className="td_item item_color">
        <label>{precio_usd}</label>
      </div>
      <div className="td_item item_qty cantidad">
        <button className="pqt-minus" onClick={() => disminuir()}>
          -
        </button>
        <span className="cantidad-cart">{cantidad}</span>
        <button className="pqt-plus" onClick={() => aumentar()}>
          +
        </button>
      </div>
      <div className="td_item item_price">
        <label>{preciototal}</label>
      </div>
      <div className="td_item item_remove">
        <span className="material-icons-outlined">close</span>
      </div>
    </div>
  );
};

export default ItenProductoVenta;
