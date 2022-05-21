import React, { useContext, useEffect } from "react";
import MainLayout from "../layout/main.layout";

import inicioContext from "../../context/Inicio/inicioContext";

import "./inicio.css";

import caja from "../../assets/caja.svg";
import nventa from "../../assets/totalVenta.svg";
import usersT from "../../assets/usersT.svg";
import pan from "../../assets/pan.svg";

// import Grfico from "./Grafico";

const Inicio = () => {
  //Obtener las funcnciones del context de Inicio
  const inicioContextI = useContext(inicioContext);
  const {
    obtenerCajaHoy,
    obtenerClientesTotales,
    obtenerTotalVenta,
    obtenerProductosTotales,
    clientesTotales,
    cajaHoy,
    totalVenta,
    numeroProductos,
  } = inicioContextI;

  // Obtener los datod al cargar el componente
  useEffect(() => {
    obtenerCajaHoy();
    obtenerTotalVenta();
    obtenerClientesTotales();
    obtenerProductosTotales();
    console.log("cajaHoy: ", cajaHoy);
  }, []);

  return (
    <MainLayout>
      <div className="contenedor-inicio">
        <section class="title">
          <p>BuñuelosDias</p>
          <p>Lo mejor para tu economía</p>
        </section>

        <section class="cards">
          <div class="card caja">
            <div class="card__svg-container">
              <div class="card__svg-wrapper">
                <img src={caja} alt="" />
              </div>
            </div>
            <div class="card__count-container">
              <div class="card__count-text">
                <span class="card__count-text--big">${cajaHoy}</span>
              </div>
            </div>
            <div class="card__stuff-container">
              <div class="card__stuff-text"> Caja de Hoy</div>
            </div>
          </div>
          <div class="card total">
            <div class="card__svg-container">
              <div class="card__svg-wrapper">
                <img src={nventa} alt="" />
              </div>
            </div>
            <div class="card__count-container">
              <div class="card__count-text">
                <span class="card__count-text--big">${totalVenta}</span>
              </div>
            </div>
            <div class="card__stuff-container">
              <div class="card__stuff-text"> Total de Ventas</div>
            </div>
          </div>
          <div class="card clientesT">
            <div class="card__svg-container">
              <div class="card__svg-wrapper">
                <img src={usersT} alt="" />
              </div>
            </div>
            <div class="card__count-container">
              <div class="card__count-text">
                <span class="card__count-text--big">{clientesTotales}</span>
              </div>
            </div>
            <div class="card__stuff-container">
              <div class="card__stuff-text"> Clientes Totales </div>
            </div>
          </div>
          <div class="card pan">
            <div class="card__svg-container">
              <div class="card__svg-wrapper">
                <img src={pan} alt="" />
              </div>
            </div>
            <div class="card__count-container">
              <div class="card__count-text">
                <span class="card__count-text--big">{numeroProductos}</span>
              </div>
            </div>
            <div class="card__stuff-container">
              <div class="card__stuff-text"> # Productos</div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Inicio;
