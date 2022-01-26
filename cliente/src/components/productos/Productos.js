import React, { Fragment, useContext, useEffect } from "react";
import MainLayout from "../layout/main.layout";
import CardProducto from "./cardProducto";

import ProductosContext from "../../context/Productos/productoContext";

import "./Productos.css";
//icono svg
import cake from "../../assets/cupcake.svg";

const Productos = () => {
  //Obtener las funcnciones del context de Productos
  const clienteContext = useContext(ProductosContext);
  const { obtenerProductos, productos, buscar } = clienteContext;

  //Obtener clientes cuando carga el componente
  useEffect(() => {
    obtenerProductos();
  }, []);

  const onChangeBuscar = (e) => {
    buscar(e.target.value);
  };

  return (
    <MainLayout>
      <section className="content-search">
        <div className="box">
          <div className="container-2">
            <span className="icon">
              <img src={cake} alt="" />
            </span>
            <input
              type="text"
              id="search"
              placeholder="Código Producto..."
              onChange={onChangeBuscar}
            />
          </div>
        </div>
      </section>
      <main>
        <div className="contenedor-cards">
          <ol className="gradient-list">
            <div className="encabezado">
              <p>Código</p>
              <p>Nombre</p>
              <p>Categoría</p>
              <p>Precio</p>
              <p>Stock</p>
              <p>Caducidad</p>
              <p>Elaboración</p>
              <p>Imagen </p>
            </div>
            {productos.length > 0 ? (
              productos.map((item) => {
                return <CardProducto key={item.codProducto} productos={item} />;
              })
            ) : (
              <p>No se encontron productos que coincidan</p>
            )}
          </ol>
        </div>
      </main>
    </MainLayout>
  );
};

export default Productos;
