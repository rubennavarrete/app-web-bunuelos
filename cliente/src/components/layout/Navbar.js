import React from "react";
import styles from "./Links.module.css";
import jwt_decode from "jwt-decode";

import { NavLink } from "react-router-dom";

// importamos imagenes
// import venta from "../../assets/venta.svg";

const Navbar = (query) => {
  const token = localStorage.getItem("token");

  var decoded = jwt_decode(token);

  return (
    <div className={styles.links}>
      {decoded.tipoUs === "A" ? (
        <NavLink
          to={"/inicio"}
          className={`customBtn boton no-print ${
            query === "/inicio" ? "active" : ""
          }`}
        >
          <div className={styles.link}>
            {/* <img src={} alt="" /> */}
            <h2>Inicio</h2>
          </div>
        </NavLink>
      ) : (
        ""
      )}

      {decoded.tipoUs === "A" ? (
        <NavLink
          to={"/clientes"}
          className={`customBtn boton no-print ${
            query === "/clientes" ? "active" : ""
          }`}
        >
          <div className={styles.link}>
            {/* <img src={} alt="" /> */}
            <h2>Clientes</h2>
          </div>
        </NavLink>
      ) : (
        ""
      )}

      <NavLink
        to={"/productos"}
        className={`customBtn boton no-print ${
          query === "/productos" ? "active" : ""
        }`}
      >
        <div className={styles.link}>
          {/* <img src={} alt="" /> */}
          <h2>Productos</h2>
        </div>
      </NavLink>
      <NavLink
        to={"/ventas"}
        className={`customBtn boton no-print ${
          query === "/ventas" ? "active" : ""
        }`}
      >
        <div className={styles.link}>
          {/* <img src={venta} alt="svg venta" /> */}
          <h2>Ventas</h2>
        </div>
      </NavLink>
      <NavLink
        to={"/reportes"}
        className={`customBtn boton no-print ${
          query === "/reportes" ? "active" : ""
        }`}
      >
        <div className={styles.link}>
          {/* <img src={} alt="" /> */}
          <h2>Reportes</h2>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
