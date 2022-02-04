import React from "react";
import MainLayout from "../layout/main.layout";
import "./Reportes.css";

import clientesR from "../../assets/reportes/clientesR.svg";
import productosT from "../../assets/reportes/productosT.svg";
import productosA from "../../assets/reportes/productosA.svg";
import productosC from "../../assets/reportes/productosC.svg";
import detalleV from "../../assets/reportes/detalleV.svg";
import birthday from "../../assets/reportes/birthday.svg";
import factura from "../../assets/reportes/factura.svg";

const Reportes = () => {
  const impromirReporte = () => {
    window.print();
  };
  return (
    <MainLayout>
      {/* <button
        className="button button2 no-print"
        onClick={() => impromirReporte()}
      >
        Imprimir
      </button> */}
      <div className="contenedor-card-list">
        <div className="cards-list">
          <div className="cardR 1 no-print" onClick={() => impromirReporte()}>
            <div className="card_image">
              <img src={clientesR} alt="" />{" "}
            </div>
            <div className="card_title title-white">
              <p>Total Clientes Registrados</p>
            </div>
          </div>

          <div className="cardR 2 no-print">
            <div className="card_image">
              <img src={productosT} alt="" />
            </div>
            <div className="card_title title-white">
              <p>Productos Totales</p>
            </div>
          </div>

          <div className="cardR 3 no-print">
            <div className="card_image">
              <img src={detalleV} alt="" />
            </div>
            <div className="card_title title-white">
              <p>Ordenes De Compra</p>
            </div>
          </div>

          <div className="cardR 4 no-print">
            <div className="card_image">
              <img src={productosA} alt="" />
            </div>
            <div className="card_title title-white">
              <p>Producto Por Acabarse</p>
            </div>
          </div>

          <div className="cardR 5 no-print">
            <div className="card_image">
              <img src={productosC} alt="" />
            </div>
            <div className="card_title title-white">
              <p>Productos Caducados</p>
            </div>
          </div>

          <div className="cardR 6 no-print">
            <div className="card_image">
              <img src={birthday} alt="" />
            </div>
            <div className="card_title title-white">
              <p>Clientes Cumpleañeros</p>
            </div>
          </div>

          <div className="cardR 7 no-print">
            <div className="card_image">
              <img src={factura} alt="" />
            </div>
            <div className="card_title title-white">
              <p>Facturas</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reportes;
