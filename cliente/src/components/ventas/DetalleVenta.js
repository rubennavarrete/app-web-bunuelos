import React, { Fragment, useContext, useEffect, useState } from "react";

import ItenProductoVenta from "./ItemProductoVenta";

import VentasContext from "../../context/ventas/ventaContext";

const DetalleVenta = () => {
  const ventasContext = useContext(VentasContext);
  const {
    cancelarVenta,
    intemsDetalleVenta,
    state,
    vistaIngresar,
    obtenerValoresFactura,
  } = ventasContext;

  const [subTotal, guardarSubtotal] = useState(0);
  const [ivaT, cambiarIvaT] = useState({ value: 0 });
  const [clacIva, guardarCalcIva] = useState((subTotal * ivaT.value) / 100);
  const [total, guardarTotal] = useState(0);

  // Obtener los valores de iva, subtotal y total para el detalle de factura

  const ivas = [
    {
      value: 0,
    },
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
    {
      value: 6,
    },
    {
      value: 7,
    },
    {
      value: 8,
    },
    {
      value: 9,
    },
    {
      value: 10,
    },
    {
      value: 11,
    },
    {
      value: 12,
    },
    {
      value: 13,
    },
    {
      value: 14,
    },
    {
      value: 15,
    },
    {
      value: 16,
    },
    {
      value: 17,
    },
    {
      value: 18,
    },
    {
      value: 19,
    },
    {
      value: 20,
    },
  ];

  useEffect(() => {
    guardarCalcIva((subTotal * ivaT.value) / 100);
    guardarTotal(
      parseFloat(subTotal) + parseFloat((subTotal * ivaT.value) / 100)
    );
    calcularTotal();
    if (vistaIngresar === false) intemsDetalleVenta.seleccionado = true;
  }, [state, intemsDetalleVenta, ivaT, subTotal]);

  const calcularTotal = () => {
    const valor =
      intemsDetalleVenta.length === 0
        ? 0
        : intemsDetalleVenta.reduce((prev, cur) => {
            return { pTotal: prev.pTotal + cur.pTotal };
          });
    guardarSubtotal(valor.pTotal);
  };

  const formatMoney = (prev_price) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const precio_usd = formatter.format(prev_price);
    return precio_usd;
  };

  const handleChange = (e) => {
    cambiarIvaT({ value: e.target.value });
  };

  const cancelarLaVenta = () => {
    cancelarVenta();
  };

  const valores = {
    sub: subTotal,
    iv: ivaT.value,
    clI: clacIva,
    tt: total,
  };

  useEffect(() => {
    obtenerValoresFactura(valores);
  }, [total]);

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
          {intemsDetalleVenta.length > 0 ? (
            intemsDetalleVenta.map((item) => {
              return (
                <ItenProductoVenta
                  key={item.codProducto}
                  intemsDetalleVenta={item}
                />
              );
            })
          ) : (
            <p className="mensaje-vistas">Seleccione los productos!</p>
          )}
        </div>
        <div className="footer">
          <div className="back_cart"></div>
          <div className="subtotal">
            <label>Subtotal: </label>
            <strong>
              {intemsDetalleVenta.length > 0 ? formatMoney(subTotal) : 0}
            </strong>
          </div>
          <div className="subtotal">
            <label className="iva">
              Iva:
              <div className="select">
                <select onChange={(e) => handleChange(e)}>
                  {ivas.map((iva) => (
                    <option key={iva.value} value={iva.value}>
                      {iva.value}
                    </option>
                  ))}
                </select>
              </div>
            </label>
            <strong>
              {intemsDetalleVenta.length > 0 ? formatMoney(clacIva) : 0}
            </strong>
          </div>
          <div className="subtotal">
            <label>Total: </label>
            <strong>
              {intemsDetalleVenta.length > 0 ? formatMoney(total) : 0}
            </strong>
          </div>
        </div>
      </div>
      <div className="contenedor-boton-cancelar">
        <button className="cart-button" onClick={() => cancelarLaVenta()}>
          Cancelar Venta
        </button>
      </div>
    </Fragment>
  );
};

export default DetalleVenta;
