import React from "react";
import MainLayout from "../layout/main.layout";
import "./Reportes.css";

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
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />{" "}
            </div>
            <div className="card_title title-white">
              <p>Card Title</p>
            </div>
          </div>

          <div className="cardR 2 no-print">
            <div className="card_image">
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />
            </div>
            <div className="card_title title-white">
              <p>Card Title</p>
            </div>
          </div>

          <div className="cardR 3 no-print">
            <div className="card_image">
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />
            </div>
            <div className="card_title">
              <p>Card Title</p>
            </div>
          </div>

          <div className="cardR 4 no-print">
            <div className="card_image">
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />
            </div>
            <div className="card_title title-black">
              <p>Card Title</p>
            </div>
          </div>

          <div className="cardR 5 no-print">
            <div className="card_image">
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />
            </div>
            <div className="card_title title-black">
              <p>Card Title</p>
            </div>
          </div>

          <div className="cardR 6 no-print">
            <div className="card_image">
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />
            </div>
            <div className="card_title title-black">
              <p>Card Title</p>
            </div>
          </div>

          <div className="cardR 7 no-print">
            <div className="card_image">
              <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="" />
            </div>
            <div className="card_title title-black">
              <p>Card Title</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reportes;
