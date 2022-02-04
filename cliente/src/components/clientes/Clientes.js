import React, { Fragment, useContext, useEffect } from "react";
import MainLayout from "../layout/main.layout";
import Tabla from "./Tabla";
import Editar from "./Editar";

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
    buscar,
  } = clienteContext;

  //Obtener clientes cuando carga el componente
  useEffect(() => {
    obtenerClientes();
  }, [cedulaObte, agregar]);

  // recvisar si los datos que vienen de clientes tiene contenido

  const onChangeAgregar = (e) => {
    buscar(e.target.value);
  };

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
                  <input
                    type="number"
                    id="search"
                    placeholder="Numero de cedula..."
                    onChange={onChangeAgregar}
                  />
                </div>
              </div>
            </section>
            <section className="content-tabla">
              <table className="rwd_auto fontsize">
                <thead>
                  <tr>
                    <th style={{ width: 64 }}>#</th>
                    <th style={{ width: 184 }}>Cedula</th>
                    <th style={{ width: 253 }}>Nombre</th>
                    <th style={{ width: 276 }}>Direccion</th>
                    <th style={{ width: 181 }}>Telefono</th>
                    <th style={{ width: 350 }}>Correo</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
              </table>
              <div className="table-responsive">
                <table className="rwd_auto fontsize">
                  <tbody>
                    {clientes.length > 0 ? (
                      clientes.map((item) => {
                        return <Tabla key={item.cedulaCli} clientes={item} />;
                      })
                    ) : (
                      <p className="mensaje-vistas">
                        No se encontron clientes!
                      </p>
                    )}
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
