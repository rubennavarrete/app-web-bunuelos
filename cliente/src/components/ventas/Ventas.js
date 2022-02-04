import React, { useContext, useEffect } from "react";
import MainLayout from "../layout/main.layout";
import ProductoVenta from "./ProductoVenta";
import PreVenta from "./PreVenta";

import VentasContext from "../../context/ventas/ventaContext";

import "./Ventas.css";

const Ventas = () => {
  //Obtener las funcnciones del context de Ventas
  const ventasContext = useContext(VentasContext);

  const { obtenerProductosVenta, productosVenta } = ventasContext;

  //Obtener productos de ventas cuando carga el componente
  useEffect(() => {
    obtenerProductosVenta();
  }, []);

  return (
    <MainLayout>
      <div className="contedor-cards">
        <div className="contenedor-left">
          <h1>Productos</h1>

          <div className="contenedor-header">
            <p>Código</p>
            <p>Nombre</p>
            <p>Precio</p>
            <p>Stock</p>
            <p>Caducidad</p>
          </div>
          <div className="contenedor-cards-left">
            {productosVenta.length > 0 ? (
              productosVenta.map((item) => {
                return (
                  <ProductoVenta key={item.codProducto} productosVenta={item} />
                );
              })
            ) : (
              <p className="mensaje-vistas">
                Aun no se ingresan productos para la venta de hoy!
              </p>
            )}
          </div>
        </div>
        <div className="contenedor-rigth">
          <PreVenta />
        </div>
      </div>
    </MainLayout>
  );
};

export default Ventas;
