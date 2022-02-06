import React, { useContext, useEffect } from "react";

import logo from "../../assets/Logo.svg";

import Tabla from "../clientes/Tabla";
import CardProducto from "../productos/cardProducto";
import clientesContext from "../../context/Clientes/clientesContext";
import reportesContext from "../../context/Reportes/reportesContext";
import ProductosContext from "../../context/Productos/productoContext";

const impromirReporte = () => {
  window.print();
};

const PlantillaClientesRegistrados = ({
  seccion,
  titulo,
  encabezado,
  numeroR,
  emisor,
}) => {
  const hoy = new Date().toISOString().substring(0, 10);

  //Obtener las funcnciones del context de clientes
  const clienteContext = useContext(clientesContext);
  const { clientes, obtenerClientes } = clienteContext;

  //Obtener las funcnciones del context de reportes
  const reporteContext = useContext(reportesContext);
  const {
    ocultarVistaReporte,
    obtenerProductosCaducados,
    octecnerCaducados,
    obtnerPoductosAcabarse,
    acabarse,
    obtenerClientesCumpleaneros,
    cumpleaneros,
  } = reporteContext;

  //Obtener las funcnciones del context de Productos
  const productoContext = useContext(ProductosContext);
  const { obtenerProductos, productos } = productoContext;

  //Obtener clientes cuando carga el componente
  useEffect(() => {
    obtenerClientes();
  }, []);

  //Obtener clientes cuando carga el componente
  useEffect(() => {
    obtenerProductos();
  }, []);

  //Obtener clientes cuando carga el componente
  useEffect(() => {
    obtenerProductosCaducados();
  }, []);

  useEffect(() => {
    obtnerPoductosAcabarse();
  }, []);

  useEffect(() => {
    obtenerClientesCumpleaneros();
  }, []);
  return (
    <main>
      <section className="onecolumn">
        <h3 className="no-print contenedor-retorno">
          <p className="txt-reporte" onClick={() => ocultarVistaReporte()}>
            Reportes
          </p>
          <p>&#x276F; {seccion}</p>
        </h3>
        <div className="contenedor-boton">
          <button
            className="button button2 no-print"
            onClick={() => impromirReporte()}
          >
            Imprimir Reporte
          </button>
        </div>

        <div className="logo-reporte">
          <img src={logo} alt="svg venta" />
        </div>

        <h2 /*style="margin:2rem 0 1rem; text-align:center;"*/>
          <span className="pinkheart"></span>
          {titulo}
        </h2>
        <p>{encabezado}</p>

        <h4>Datos Reporte</h4>

        <table id="checkoutSummary">
          <tbody>
            <tr>
              <th>Número de Reporte</th>
              <td># {numeroR}</td>
            </tr>
            <tr>
              <th>Emisor:</th>
              <td>{emisor}</td>
            </tr>
            <tr>
              <th>Fecha:</th>
              <td>{hoy}</td>
            </tr>
          </tbody>
        </table>

        <h4>Información Del Reporte</h4>

        {numeroR === 1 ? (
          <section className="content-tabla">
            <table className="rwd_auto fontsize">
              <thead>
                <tr>
                  <th style={{ width: 64 }}>#</th>
                  <th style={{ width: 184 }}>Cédula</th>
                  <th style={{ width: 253 }}>Nombre</th>
                  <th style={{ width: 276 }}>Dirección</th>
                  <th style={{ width: 181 }}>Teléfono</th>
                  <th style={{ width: 350 }}>Correo</th>
                  <th>Fecha</th>
                </tr>
              </thead>
            </table>
            <div className="table-responsive">
              <table className="rwd_auto fontsize">
                <tbody>
                  {clientes.length > 0 ? (
                    clientes.map((item) => {
                      return <Tabla key={item.cedulaCli} clientes={item} />;
                    })
                  ) : (
                    <p className="mensaje-vistas">No se encontraron clientes!</p>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        ) : numeroR === 2 ? (
          <div className="contenedor-cards">
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
            <ol className="gradient-list">
              {productos.length > 0 ? (
                productos.map((item) => {
                  return (
                    <CardProducto key={item.codProducto} productos={item} />
                  );
                })
              ) : (
                <p>No se encontron productos que coincidan</p>
              )}
            </ol>
          </div>
        ) : numeroR === 4 ? (
          <div className="contenedor-cards">
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
            <ol className="gradient-list">
              {acabarse.length > 0 ? (
                acabarse.map((item) => {
                  return (
                    <CardProducto key={item.codProducto} productos={item} />
                  );
                })
              ) : (
                <p>Aun tenemos productos disponibles</p>
              )}
            </ol>
          </div>
        ) : numeroR === 5 ? (
          <div className="contenedor-cards">
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
            <ol className="gradient-list">
              {octecnerCaducados.length > 0 ? (
                octecnerCaducados.map((item) => {
                  return (
                    <CardProducto key={item.codProducto} productos={item} />
                  );
                })
              ) : (
                <p>No se encontron productos caducados</p>
              )}
            </ol>
          </div>
        ) : numeroR === 6 ? (
          <section className="content-tabla">
            <table className="rwd_auto fontsize">
              <thead>
                <tr>
                  <th style={{ width: 64 }}>#</th>
                  <th style={{ width: 184 }}>Cédula</th>
                  <th style={{ width: 253 }}>Nombre</th>
                  <th style={{ width: 276 }}>Dirección</th>
                  <th style={{ width: 181 }}>Teléfono</th>
                  <th style={{ width: 350 }}>Correo</th>
                  <th>Fecha</th>
                </tr>
              </thead>
            </table>
            <div className="table-responsive">
              <table className="rwd_auto fontsize">
                <tbody>
                  {cumpleaneros.length > 0 ? (
                    cumpleaneros.map((item) => {
                      return <Tabla key={item.cedulaCli} clientes={item} />;
                    })
                  ) : (
                    <p className="mensaje-vistas">
                      No se encontron clientes cumpleañeros!
                    </p>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        <h4> </h4>
        <p> Riobamba - Ecuador 2022</p>
      </section>
    </main>
  );
};

export default PlantillaClientesRegistrados;
