import React, { useState } from "react";

const Editar = () => {
  //State para agregar cliente
  const [cliente, guardarCliente] = useState({
    cedula: "",
    nombre: "",
    direccion: "",
    telefono: "",
    correo: "",
    fecha: "",
  });

  //Extraer de agregar cliente
  const { cedula, nombre, direccion, telefono, correo, fecha } = cliente;

  const onChangeAgregar = (e) => {
    guardarCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  //Para agregaar un nuevo cliente
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no haya campos vacios

    //Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="botn-cerrar">
        <button type="button" className="btn btn-block btn-primario redondear">
          X
        </button>
      </div>
      <div className="contenedor-form sonbra-dark">
        <h1>Ingresar Cliente</h1>

        <form>
          <div className="campo-form">
            <label htmlFor="cedula">Cedula</label>
            <input
              type="text"
              className="input-text"
              name="cedula"
              placeholder="Ingrese la Cedula..."
              value={cedula}
              onChange={onChangeAgregar}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="input-text"
              name="nombre"
              placeholder="Ingrese el nombre..."
              value={nombre}
              onChange={onChangeAgregar}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="direccion">Direccion</label>
            <input
              type="text"
              className="input-text"
              name="direccion"
              placeholder="Ingrese la direccion..."
              value={direccion}
              onChange={onChangeAgregar}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="telefono">Telefono</label>
            <input
              type="text"
              className="input-text"
              name="direccion"
              placeholder="Ingrese el telefono..."
              value={telefono}
              onChange={onChangeAgregar}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              className="input-text"
              name="correo"
              placeholder="Ingrese el correo..."
              value={correo}
              onChange={onChangeAgregar}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="fecha">Fecha de nacimiento</label>
            <input
              type="text"
              className="input-text"
              name="fecha"
              placeholder="Ingrese la fecha de nacimiento..."
              value={fecha}
              onChange={onChangeAgregar}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Ingresar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editar;
