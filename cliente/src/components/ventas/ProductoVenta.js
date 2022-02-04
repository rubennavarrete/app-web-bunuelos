import React, { Fragment, useContext } from "react";
import Swal from "sweetalert2";

import shopping from "../../assets/shopping.svg";

import VentasContext from "../../context/ventas/ventaContext";

const ProductoVenta = ({ productosVenta }) => {
  //Obtener las funcnciones del context de Ventas
  const ventasContext = useContext(VentasContext);

  const { obtenerItemsDetalleVentas, clienteSeleccionado } = ventasContext;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const precio_usd = formatter.format(productosVenta.precio);

  const caducidad = productosVenta.fechaCad;

  const comprobar = () => {
    if (clienteSeleccionado != null) {
      productosVenta.count = 0;
      productosVenta.pTotal = 0;
      productosVenta.seleccionado = true;
      obtenerItemsDetalleVentas(productosVenta);
    } else {
      Swal.fire({
        title: "Consejo",
        text: "Antes de continuar ingresa las cedula del cliente para la facturacion!",
        icon: "info",
        timer: "5000",
      });
    }
  };

  return (
    <Fragment>
      <div className="container">
        <button
          className="list"
          onClick={() => comprobar()}
          disabled={productosVenta.seleccionado === true ? true : null}
        >
          <img
            src={
              productosVenta.fotoUrl !== null
                ? productosVenta.fotoUrl
                : `https://media.istockphoto.com/photos/modern-bakery-with-assortment-of-different-bread-picture-id682921082?k=20&m=682921082&s=612x612&w=0&h=A4DUnmwDHxuDjy-CuQOdZ3VD14G4MIX6n6gDw7MB-h0=`
            }
            alt=""
          />
          <div className="wrapper">
            <h3>{productosVenta.codProducto}</h3>
            <h3>{productosVenta.nombre}</h3>
            <h3>{precio_usd}</h3>
            <h3>{productosVenta.stock}</h3>
            <h3>{caducidad && caducidad.substring(0, 10)}</h3>
          </div>
          <div className="shoping-img">
            <img src={shopping} alt="" />
          </div>
        </button>
      </div>
    </Fragment>
  );
};

export default ProductoVenta;
