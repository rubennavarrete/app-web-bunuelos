import React from "react";

import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import logo from "../../assets/Logo.svg";

const MainLayout = ({ children, ...props }) => {
  const search = useLocation().pathname;

  return (
    <div className="contenedor-app">
      <aside>
        <div className="logo">
          <img src={logo} alt="svg venta" />
        </div>
        <Sidebar query={search} />
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
