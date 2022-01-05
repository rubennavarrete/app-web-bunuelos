import React from "react";
import styles from "./Links.module.css";

import { NavLink } from "react-router-dom";

// importamos imagenes
import venta from "../../assets/venta.svg";

const Links = () => {
  return (
    <div className={styles.links}>
      <NavLink
        to={"/inicio"}
        className={`${styles.customBtn} ${styles.boton}`}
        activeClassName={`${styles.activo}`}
      >
        <div className={styles.link}>
          {/* <img src={} alt="" /> */}
          <h2>Inicio</h2>
        </div>
      </NavLink>
      <NavLink
        to={"/clientes"}
        className={`${styles.customBtn} ${styles.boton}`}
        activeClassName={`${styles.activo}`}
      >
        <div className={styles.link}>
          {/* <img src={} alt="" /> */}
          <h2>Clientes</h2>
        </div>
      </NavLink>
      <NavLink
        to={"/productos"}
        className={`${styles.customBtn} ${styles.boton}`}
        activeClassName={`${styles.activo}`}
      >
        <div className={styles.link}>
          {/* <img src={} alt="" /> */}
          <h2>Productos</h2>
        </div>
      </NavLink>
      <NavLink
        to={"/ventas"}
        className={`${styles.customBtn} ${styles.boton}`}
        activeClassName={`${styles.activo}`}
      >
        <div className={styles.link}>
          {/* <img src={venta} alt="svg venta" /> */}
          <h2>Ventas</h2>
        </div>
      </NavLink>
      <NavLink
        to={"/reportes"}
        className={`${styles.customBtn} ${styles.boton}`}
        activeClassName={`${styles.activo}`}
      >
        <div className={styles.link}>
          {/* <img src={} alt="" /> */}
          <h2>Reportes</h2>
        </div>
      </NavLink>
    </div>
  );
};

export default Links;
