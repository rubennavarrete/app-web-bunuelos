import React, { useState, useContext } from "react";
import VentasContext from "../../context/ventas/ventaContext";
import Swal from "sweetalert2";

const ItenProductoVenta = ({ intemsDetalleVenta }) => {
  const ventasContext = useContext(VentasContext);
  const { actualizarDetalleVenta, eliminarItems, numeroOrden } = ventasContext;

  let [cantidad, guardarCantidad] = useState(1);
  let [total, guardarTotal] = useState(intemsDetalleVenta.precio);

  const aumentar = () => {
    if (cantidad < intemsDetalleVenta.stock) {
      cantidad++;
      guardarCantidad(cantidad);
      guardarTotal(cantidad * intemsDetalleVenta.precio);
      actualizarDetalleVenta();
    } else {
      Swal.fire({
        title: "Límite Alcanzado",
        text: "Se ha alcanzado el límite de productos en stock ",
        icon: "warning",
      });
    }
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

  intemsDetalleVenta.count = cantidad;
  intemsDetalleVenta.pTotal = total;
  intemsDetalleVenta.numeroOrden = numeroOrden;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const precio_usd = formatter.format(intemsDetalleVenta.precio);

  const preciototal = formatter.format(total);

  const botonEliminar = () => {
    eliminarItems(intemsDetalleVenta.codProducto);
    intemsDetalleVenta.seleccionado = false;
  };

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
        <span
          className="material-icons-outlined"
          onClick={() => botonEliminar()}
        >
          close
        </span>
      </div>
    </div>
  );
};

export default ItenProductoVenta;
