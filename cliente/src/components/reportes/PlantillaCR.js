import React, { useContext, useEffect } from "react";

import logo from "../../assets/Logo.svg";

import Tabla from "../clientes/Tabla";
import CardProducto from "../productos/cardProducto";
import clientesContext from "../../context/Clientes/clientesContext";
import reportesContext from "../../context/Reportes/reportesContext";
import ProductosContext from "../../context/Productos/productoContext";
import OrdenC from "./OrdenCompra";
import MasVendidos from "./MasVendidos";

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
    obtenerOrdenCompras,
    ordenCompra,
    obtenerMasVendidos,
    masVendidos,
  } = reporteContext;

  //Obtener las funcnciones del context de Productos
  const productoContext = useContext(ProductosContext);
  const { obtenerProductos, productos } = productoContext;

  console.log("ordenCompra: ", ordenCompra);

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

  useEffect(() => {
    obtenerOrdenCompras();
  }, []);

  useEffect(() => {
    obtenerMasVendidos();
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

        <h4>Datos del Reporte:</h4>

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

        <h4>Información del Reporte</h4>

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
                    <p className="mensaje-vistas">
                      No se encontraron clientes!
                    </p>
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
                      No se encontron clientes cumpleañeros?
                    </p>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        ) : numeroR === 3 ? (
          <section className="content-tabla">
            <table className="rwd_auto fontsize">
              <thead>
                <tr>
                  <th style={{ width: 64 }}>#</th>
                  <th style={{ width: 170 }}>Valor Total</th>
                  <th style={{ width: 300 }}>Fecha</th>
                  <th style={{ width: 181 }}>Cédula</th>
                  <th style={{ width: 250 }}>Vendedor</th>
                </tr>
              </thead>
            </table>
            <div className="table-responsive">
              <table className="rwd_auto fontsize">
                <tbody>
                  {ordenCompra.length > 0 ? (
                    ordenCompra.map((item) => {
                      return <OrdenC key={item.numOrden} ordenes={item} />;
                    })
                  ) : (
                    <p className="mensaje-vistas">
                      No se encontron ordenes de compra!
                    </p>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        ) : numeroR === 7 ? (
          <section className="content-tabla">
            <table className="rwd_auto fontsize">
              <thead>
                <tr>
                  <th style={{ width: 80 }}>Cantidad</th>
                  <th style={{ width: 150 }}>Código </th>
                  <th style={{ width: 400 }}>Nombre</th>
                  <th style={{ width: 200 }}>Ganancia</th>
                </tr>
              </thead>
            </table>
            <div className="table-responsive">
              <table className="rwd_auto fontsize">
                <tbody>
                  {masVendidos.length > 0 ? (
                    masVendidos.map((item) => {
                      return <MasVendidos key={item.numOrden} mas={item} />;
                    })
                  ) : (
                    <p className="mensaje-vistas">
                      No se encontron los productos más vendidos!
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
