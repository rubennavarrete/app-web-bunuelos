import React, { useState, useContext } from "react";

import clientesContext from "../../context/Clientes/clientesContext";

import Input from "../inputs/Input";

// importe de iconos
import alertaTriangulo from "../../assets/alert.svg";

const Editar = ({ titulo, clientes }) => {
  //Cambiar el stado del boton agregar
  const clienteContext = useContext(clientesContext);
  const {
    cerrarAgregarCliente,
    agregarCliente,
    datoActualizar,
    mostarActualizar,
  } = clienteContext;

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
  // const { cedula, nombre, direccion, telefono, correo, fecha } = cliente;

  const onChangeAgregar = (e) => {
    guardarCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  //State para validar los campos del componente input
  const [cedulaV, cambiarCedulaV] = useState({ campo: "", valido: null });
  const [nombreV, cambiarNombreV] = useState({ campo: "", valido: null });
  const [direccionV, cambiarDireccionV] = useState({ campo: "", valido: null });
  const [telefonoV, cambiarTelefonoV] = useState({ campo: "", valido: null });
  const [correoV, cambiarCorreoV] = useState({ campo: "", valido: null });
  const [fechaV, cambiarFechaV] = useState({ campo: "", valido: null });
  const [formularioV, cambiarFormularioV] = useState(null);

  let dCedula = { campo: "", valido: null };
  let dNombre = { campo: "", valido: null };
  let dDireccion = { campo: "", valido: null };
  let dTelefomo = { campo: "", valido: null };
  let dCorreo = { campo: "", valido: null };
  let dFecha = { campo: "", valido: null };

  //Para agregaar un nuevo cliente
  const onSubmitCLiente = (e) => {
    e.preventDefault();

    if (
      cedulaV.valido === true &&
      nombreV.valido === true &&
      direccionV.valido === true &&
      telefonoV.valido === true &&
      correoV.valido === true &&
      fechaV.valido === true
    ) {
      cambiarFormularioV(true);
      setTimeout(
        () =>
          agregarCliente({
            cedula: cedulaV.campo,
            nombre: nombreV.campo,
            direccion: direccionV.campo,
            telefono: telefonoV.campo,
            correo: correoV.campo,
            fecha: fechaV.campo,
          }),
        3000
      );

      cambiarCedulaV({ campo: "", valido: null });
      cambiarNombreV({ campo: "", valido: null });
      cambiarDireccionV({ campo: "", valido: null });
      cambiarTelefonoV({ campo: "", valido: null });
      cambiarCorreoV({ campo: "", valido: null });
      cambiarFechaV({ campo: "", valido: null });
      //agregar al State
    } else {
      cambiarFormularioV(false);
      setTimeout(() => cambiarFormularioV(null), 4000);
    }
  };

  const expresiones = {
    cedula: /^[0-9] {2,3}-? ?[0-9] {6,7} $/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    direccion: /^[#.0-9a-zA-Z\s,-]+$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{8,10}$/, // 8 a 10 numeros.
    fecha: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
  };

  if (mostarActualizar) {
    dCedula = {
      campo: datoActualizar[0].cedula,
      valido: null,
    };
    dNombre = { campo: datoActualizar[0].nombre, valido: null };
    dDireccion = { campo: datoActualizar[0].direccion, valido: null };
    dTelefomo = { campo: datoActualizar[0].telefono, valido: null };
    dCorreo = { campo: datoActualizar[0].correo, valido: null };
    dFecha = { campo: datoActualizar[0].fecha, valido: null };
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form-cliente">
        <div className="botn-cerrar">
          <button
            type="button"
            className="btn btn-block btn-primario redondear"
            onClick={() => cerrarAgregarCliente()}
          >
            X
          </button>
        </div>
        <h1>{titulo}</h1>

        <form className="formulario-nuevo-cliente" onSubmit={onSubmitCLiente}>
          <Input
            estado={cedulaV.campo ? cedulaV : dCedula}
            cambiarEstado={cambiarCedulaV}
            label="Cédula"
            type="text"
            name="cedula"
            placeholder="Ingrese la cédula..."
            onChangeAgregar={onChangeAgregar}
            leyenda="Esta cédula no pertenece a ninguna región "
            expressionRegular={expresiones.cedula}
            tipoExpresion="1"
          />
          <Input
            estado={nombreV.campo ? nombreV : dNombre}
            cambiarEstado={cambiarNombreV}
            label="Nombre"
            type="text"
            name="nombre"
            placeholder="Ingrese el nombre..."
            onChangeAgregar={onChangeAgregar}
            leyenda="El nombre debe tener de 4 a 20 caracteres y solo puede contener letras y espacios"
            expressionRegular={expresiones.nombre}
            tipoExpresion="2"
          />
          <Input
            estado={direccionV.campo ? direccionV : dDireccion}
            cambiarEstado={cambiarDireccionV}
            label="Dirección"
            type="text"
            name="direccion"
            placeholder="Ingrese el dirección..."
            onChangeAgregar={onChangeAgregar}
            leyenda="La dirección debe tener de 4 a 50 caracteres y solo puede contener letras, números y espacios"
            expressionRegular={expresiones.direccion}
            tipoExpresion="2"
          />
          <Input
            estado={telefonoV.campo ? telefonoV : dTelefomo}
            cambiarEstado={cambiarTelefonoV}
            label="Teléfono"
            type="text"
            name="telefono"
            placeholder="Ingrese el teléfono..."
            onChangeAgregar={onChangeAgregar}
            leyenda="El teléfono debe de ser de 8 a 10 dígitos y solo puede contener números enteros positivos"
            expressionRegular={expresiones.telefono}
            tipoExpresion="2"
          />
          <Input
            estado={correoV.campo ? correoV : dCorreo}
            cambiarEstado={cambiarCorreoV}
            label="Correo"
            type="email"
            name="correo"
            placeholder="Ingrese el correo..."
            onChangeAgregar={onChangeAgregar}
            leyenda="Se espera una '@'"
            expressionRegular={expresiones.correo}
            tipoExpresion="2"
          />
          <Input
            estado={fechaV.campo ? fechaV : dFecha}
            cambiarEstado={cambiarFechaV}
            label="Fecha de nacimiento"
            type="text"
            name="fecha"
            placeholder="Ingrese la fecha de nacimiento..."
            onChangeAgregar={onChangeAgregar}
            leyenda="Ingrese una fecha con el siguiente formato yyyy-mm-dd"
            expressionRegular={expresiones.fecha}
            tipoExpresion="2"
          />
          {formularioV === false && (
            <div className="errorM">
              <p>
                <img src={alertaTriangulo} alt="" />
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </div>
          )}
          <div className="boton-centrado">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Ingresar"
            />
          </div>
          {formularioV === true && (
            <p className="exito">Cliente ingresado exitosamente!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Editar;
