import React from "react";
import jwt_decode from "jwt-decode";

import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import User from "../auth/User";

import logo from "../../assets/Logo.svg";

const MainLayout = ({ children, ...props }) => {
  const search = useLocation().pathname;

  const token = localStorage.getItem("token");

  var decoded = jwt_decode(token);

  return (
    <div className="contenedor-app">
      <aside>
        <div className="logo no-print">
          <img src={logo} alt="svg venta" />
        </div>
        <Sidebar query={search} />

        <button
          className="button button2 no-print" /*onClick={() => verificarCliente()}*/
        >
          Ayuda
        </button>

        <User decoded={decoded} />
      </aside>

      <div className="seccion-principal">
        <nav>
          <Navbar query={search} />
        </nav>
        <main>
          <div className="contenedor-tareas">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
