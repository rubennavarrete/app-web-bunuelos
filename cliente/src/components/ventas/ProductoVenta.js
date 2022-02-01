import React, { Fragment } from "react";

import shopping from "../../assets/shopping.svg";

const ProductoVenta = ({ productosVenta }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  console.log("productoVenta: ", productosVenta);
  const precio_usd = formatter.format(productosVenta.precio);

  const caducidad = productosVenta.fechaCad;

  return (
    <Fragment>
      <div className="container">
        <div className="list">
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
        </div>
      </div>
    </Fragment>
  );
};

export default ProductoVenta;
