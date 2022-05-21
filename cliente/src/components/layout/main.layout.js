import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import User from "../auth/User";

import Ayuda from "./ayuda";

import logo from "../../assets/Logo.svg";

const MainLayout = ({ children, ...props }) => {
  const search = useLocation().pathname;

  const token = localStorage.getItem("token");

  var decoded = jwt_decode(token);

  const [mostrar, guardarMostrar] = useState(false);

  const mostrarAyuda = () => {
    guardarMostrar(true);
  };

  return (
    <div className="contenedor-app">
      <aside>
        <div className="logo no-print">
          <img src={logo} alt="svg venta" />
        </div>
        <Sidebar query={search} />

        <button
          className="button button2 no-print"
          onClick={() => mostrarAyuda()}
        >
          Ayuda
        </button>

        <User decoded={decoded} />
      </aside>

      <div className="seccion-principal">
        <nav>
          <Navbar query={search} />
        </nav>
        {mostrar ? (
          <Ayuda />
        ) : (
          <main>
            <div className="contenedor-tareas">{children}</div>
          </main>
        )}

        <div class="info">
          <span>
            Made by <i class="fa fa-heart"></i>
            <a href="#">Ruben Valencia</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
