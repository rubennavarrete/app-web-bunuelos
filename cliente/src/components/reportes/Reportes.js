import React, { useContext } from "react";
import MainLayout from "../layout/main.layout";
import "./Reportes.css";

import BotonesR from "./BotonesR";
import PlantillaCR from "./PlantillaCR";
import jwt_decode from "jwt-decode";

import reportesContext from "../../context/Reportes/reportesContext";

const Reportes = () => {
  const token = localStorage.getItem("token");

  var decoded = jwt_decode(token);

  console.log("decoded: ", decoded.nombreUS);

  //Obtener las funcnciones del context de reportes
  const reporteContext = useContext(reportesContext);
  const { mostrarReporte, numeroReporte } = reporteContext;

  if (mostrarReporte === false) {
    return (
      <MainLayout>
        <BotonesR />
      </MainLayout>
    );
  } else {
    switch (numeroReporte) {
      case 1:
        return (
          <MainLayout>
            <PlantillaCR
              seccion={"Total Clientes Registrados"}
              titulo={"CLIENTES_REGISTRADOS"}
              encabezado={
                "Reporte enfocado en la presentación del total de clientes registrados hasta el momento."
              }
              numeroR={1}
              emisor={decoded.nombreUS}
            />
          </MainLayout>
        );
      case 2:
        return (
          <MainLayout>
            <PlantillaCR
              seccion={"Productos Totales"}
              titulo={"PRODUCTOS_TOTALES"}
              encabezado={
                "Reporte enfocado en la presentación de los productos disponibles en el inventario."
              }
              numeroR={2}
              emisor={decoded.nombreUS}
            />
          </MainLayout>
        );
      case 3:
        return (
          <MainLayout>
            <PlantillaCR
              seccion={"Ordenes De Compra"}
              titulo={"ORDEN_COMPRA"}
              encabezado={
                "Reporte enfocado en la presentación de las ordenes de compra."
              }
              numeroR={3}
              emisor={decoded.nombreUS}
            />
          </MainLayout>
        );
      case 4:
        return (
          <MainLayout>
            <PlantillaCR
              seccion={"Productos Por Acabarse"}
              titulo={"PRODUCTOS_POR_ACABARSE"}
              encabezado={
                "Reporte enfocado en la presentación de los productos por acabarse en el inventario."
              }
              numeroR={4}
              emisor={decoded.nombreUS}
            />
          </MainLayout>
        );
      case 5:
        return (
          <MainLayout>
            <PlantillaCR
              seccion={"Productos Caducados"}
              titulo={"PRODUCTOS_CADUCADOS"}
              encabezado={
                "Reporte enfocado en la presentación de los productos caducados."
              }
              numeroR={5}
              emisor={decoded.nombreUS}
            />
          </MainLayout>
        );
      case 6:
        return (
          <MainLayout>
            <PlantillaCR
              seccion={"Clientes Cumpleañeros"}
              titulo={"CLIENTES_CUMPLEAÑEROS"}
              encabezado={
                "Reporte enfocado en la presentación de los clientes que estan próximos a cumplir años."
              }
              numeroR={6}
              emisor={decoded.nombreUS}
            />
          </MainLayout>
        );
      case 7:
        return (
          <MainLayout>
            <PlantillaCR
              seccion={"Facturas"}
              titulo={"FACTURAS"}
              encabezado={
                "Reporte enfocado en la presentación de la facturación del día."
              }
              numeroR={7}
              emisor={decoded.nombreUS}
            />
          </MainLayout>
        );
      default:
    }
  }
};

export default Reportes;
