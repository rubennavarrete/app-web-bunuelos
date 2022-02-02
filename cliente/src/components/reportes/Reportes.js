import React from "react";
import MainLayout from "../layout/main.layout";
import "./Reportes.css";

const Reportes = () => {
  const impromirReporte = () => {
    window.print();
  };
  return (
    <MainLayout>
      <h1>Desde Reportes</h1>
      <button
        className="button button2 no-print"
        onClick={() => impromirReporte()}
      >
        Imprimir
      </button>
    </MainLayout>
  );
};

export default Reportes;
