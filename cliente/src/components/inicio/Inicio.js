import React from "react";
import MainLayout from "../layout/main.layout";
import "./inicio.css";

import caja from "../../assets/caja.svg";
import nventa from "../../assets/totalVenta.svg";
import usersT from "../../assets/usersT.svg";
import pan from "../../assets/pan.svg";

// import Grfico from "./Grafico";

const Inicio = () => {
  return (
    <MainLayout>
      <div className="contenedor-inicio">
        <section class="title">
          <p>BuñuelosDias</p>
          <p>Lo mejor para tu economia</p>
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
                <span class="card__count-text--big">$250</span>
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
                <span class="card__count-text--big">50</span>
              </div>
            </div>
            <div class="card__stuff-container">
              <div class="card__stuff-text"> Total Venta</div>
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
                <span class="card__count-text--big">80</span>
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
                <span class="card__count-text--big">100</span>
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
