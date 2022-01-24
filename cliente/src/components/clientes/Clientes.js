import React, { Fragment, useContext, useEffect } from "react";
import MainLayout from "../layout/main.layout";
import Tabla from "./Tabla";
import Editar from "./Editar";
// import Actualizar from "./Actualizar";

import clientesContext from "../../context/Clientes/clientesContext";

//css
import "./clientes.css";

//icono svg
import lupa from "../../assets/lupa.svg";

const Clientes = () => {
  //Obtener las funcnciones del context de clientes
  const clienteContext = useContext(clientesContext);
  const {
    agregar,
    clientes,
    obtenerClientes,
    mostarActualizar,
    cedulaObte,
    agregarCliente,
  } = clienteContext;

  //Obtener clientes cuando carga el componente
  useEffect(() => {
    obtenerClientes();
  }, []);

  // recvisar si los datos que vienen de clientes tiene contenido
  if (clientes.length === 0) return null;

  return (
    <MainLayout>
      <div className="contenedor-cliente">
        {agregar ? (
          <Fragment>
            <section className="content-search">
              <div className="box">
                <div className="container-2">
                  <span className="icon">
                    <img src={lupa} alt="" />
                  </span>
                  <input type="search" id="search" placeholder="Search..." />
                </div>
              </div>
            </section>
            <section className="content-tabla">
              <div className="table-responsive">
                <table className="rwd_auto fontsize">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Cedula</th>
                      <th>Nombre</th>
                      <th>Direccion</th>
                      <th>Telefono</th>
                      <th>Correo</th>
                      <th>Fecha Nac</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientes
                      ? clientes.map((item) => {
                          return <Tabla key={item.cedulaCli} clientes={item} />;
                        })
                      : null}
                  </tbody>
                </table>
              </div>
            </section>
          </Fragment>
        ) : mostarActualizar ? (
          <Editar titulo={"Actualizar datos del Cliente"} />
        ) : (
          <Editar titulo={"Ingresar datos del Cliente"} />
        )}
      </div>
    </MainLayout>
  );
};

export default Clientes;
