import React, { Fragment, useContext } from "react";

import ProductosContext from "../../context/Productos/productoContext";

const CardProducto = ({ productos }) => {
  //Obtener las funcnciones del context de Productos
  const clienteContext = useContext(ProductosContext);
  const { obtenerCodigoProducto } = clienteContext;

  const capturarCodigo = (productos) => {
    obtenerCodigoProducto(productos.codproducto);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const precio_usd = formatter.format(productos.precio);
  const elaboracion = productos.fechaelab;
  const caducidad = productos.fechacad;

  return (
    <Fragment>
      <li>
        <input
          type="radio"
          name="my-input"
          id="radio"
          onClick={() => capturarCodigo(productos)}
        />
        <p>{productos.codproducto}</p>
        <p>{productos.nombre}</p>
        <p>{productos.categoria}</p>
        <p>{precio_usd}</p>
        <p>{productos.stock}</p>
        <p>{caducidad && caducidad.substring(0, 10)}</p>
        <p>{elaboracion && elaboracion.substring(0, 10)}</p>
        <img
          src={
            productos.fotourl !== null
              ? productos.fotourl
              : `https://media.istockphoto.com/photos/modern-bakery-with-assortment-of-different-bread-picture-id682921082?k=20&m=682921082&s=612x612&w=0&h=A4DUnmwDHxuDjy-CuQOdZ3VD14G4MIX6n6gDw7MB-h0=`
          }
          alt=""
        />
      </li>
    </Fragment>
  );
};

export default CardProducto;
