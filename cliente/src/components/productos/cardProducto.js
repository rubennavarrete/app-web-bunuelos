import React, { Fragment, useContext, useEffect } from "react";

const CardProducto = ({ productos }) => {
  return (
    <Fragment>
      <li>
        <input
          type="radio"
          name="my-input"
          id="radio"
          //   onClick={() => capturarCedula(clientes)}
        />
        <p>{productos.codProducto}</p>
        <p>{productos.nombre}</p>
        <p>{productos.categoria}</p>
        <p>{productos.precio}</p>
        <p>{productos.stock}</p>
        <p>
          {productos.fechaCad !== null
            ? productos.fechaCad.substring(0, 10)
            : null}
        </p>
        <p>
          {productos.fechaCad !== null
            ? productos.fechaElab.substring(0, 10)
            : null}
        </p>
        <img
          src={
            productos.fotoUrl !== null
              ? productos.fotoUrl
              : `https://media.istockphoto.com/photos/modern-bakery-with-assortment-of-different-bread-picture-id682921082?k=20&m=682921082&s=612x612&w=0&h=A4DUnmwDHxuDjy-CuQOdZ3VD14G4MIX6n6gDw7MB-h0=`
          }
          alt=""
        />
      </li>
    </Fragment>
  );
};

export default CardProducto;
