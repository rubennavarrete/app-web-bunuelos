import React from "react";
import { Chart } from "react-chartjs-2";

const Grfico = () => {
  const data = {
    label: [
      "Pan Cachito",
      "Pan Baguette",
      "Torta de chocolate",
      "Pan Chocolate",
      "Bocaditos",
    ],
    datasets: [
      {
        label: "Ventas",
        backgroundColor: "rgba(123,255,0,1)",
        borderColor: "black",
        borderWidth: "1",
        hoverBackgroundColor: "rgba(0,255,0,0.2)",
        hoverBorderColor: "#FF0000",
        data: [234, 120, 34, 56, 546],
      },
    ],
  };

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return <Chart data={data} optios={opciones} />;
};

export default Grfico;
