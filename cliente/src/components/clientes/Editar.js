import React, { useState, useContext, useEffect } from "react";

import clientesContext from "../../context/Clientes/clientesContext";

import VentasContext from "../../context/ventas/ventaContext";

import Input from "../inputs/Input";

// importe de iconos
import alertaTriangulo from "../../assets/alert.svg";

const Editar = ({ titulo }) => {
  //Cambiar el stado del boton agregar
  const clienteContext = useContext(clientesContext);
  const {
    cerrarAgregarCliente,
    agregarCliente,
    datoActualizar,
    actualizarCliente,
    mostarActualizar,
  } = clienteContext;

  const ventasContext = useContext(VentasContext);
  const { cerrarIngresarCliente, obtenerCedulaFactura } = ventasContext;

  //State para validar los campos del componente input
  const [cedulaV, cambiarCedulaV] = useState({ campo: "", valido: null });
  const [nombreV, cambiarNombreV] = useState({ campo: "", valido: null });
  const [direccionV, cambiarDireccionV] = useState({ campo: "", valido: null });
  const [telefonoV, cambiarTelefonoV] = useState({ campo: "", valido: null });
  const [correoV, cambiarCorreoV] = useState({ campo: "", valido: null });
  const [fechaV, cambiarFechaV] = useState({ campo: "", valido: null });
  const [formularioV, cambiarFormularioV] = useState(null);

  //Para agregaar un nuevo cliente
  const onSubmitCLiente = (e) => {
    e.preventDefault();

    if (mostarActualizar) {
      cambiarCedulaV({ campo: datoActualizar[0].cedulaCli, valido: true });
    }

    if (
      cedulaV.valido === true &&
      nombreV.valido === true &&
      direccionV.valido === true &&
      telefonoV.valido === true &&
      correoV.valido === true &&
      fechaV.valido === true
    ) {
      cambiarFormularioV(true);
      if (!mostarActualizar) {
        agregarCliente({
          cedulaCli: cedulaV.campo,
          nombreCli: nombreV.campo,
          direccionCli: direccionV.campo,
          celularCli: telefonoV.campo,
          correoCli: correoV.campo,
          fechNac: fechaV.campo,
        });
        obtenerCedulaFactura({
          cedulaCli: cedulaV.campo,
          nombreCli: nombreV.campo,
          direccionCli: direccionV.campo,
          celularCli: telefonoV.campo,
          correoCli: correoV.campo,
          fechNac: fechaV.campo,
        });
      } else {
        actualizarCliente({
          cedulaCli: cedulaV.campo,
          nombreCli: nombreV.campo,
          direccionCli: direccionV.campo,
          celularCli: telefonoV.campo,
          correoCli: correoV.campo,
          fechNac: fechaV.campo,
        });
      }

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

  useEffect(() => {
    if (mostarActualizar) {
      cambiarCedulaV({ campo: datoActualizar[0].cedulaCli, valido: true });
      cambiarNombreV({ campo: datoActualizar[0].nombreCli, valido: true });
      cambiarDireccionV({
        campo: datoActualizar[0].direccionCli,
        valido: true,
      });
      cambiarTelefonoV({ campo: datoActualizar[0].celularCli, valido: true });
      cambiarCorreoV({ campo: datoActualizar[0].correoCli, valido: true });
      cambiarFechaV({
        campo: datoActualizar[0].fechNac.substring(0, 10),
        valido: true,
      });
    }
  }, []);

  const cerrar = () => {
    cerrarAgregarCliente();
    cerrarIngresarCliente();
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form-cliente">
        <div className="botn-cerrar">
          <button
            type="button"
            className="btn2 btn-block btn-primario redondear"
            onClick={() => cerrar()}
          >
            X
          </button>
        </div>
        <h1>{titulo}</h1>

        <form className="formulario-nuevo-cliente" onSubmit={onSubmitCLiente}>
          <Input
            estado={cedulaV}
            cambiarEstado={cambiarCedulaV}
            label="Cédula"
            type="text"
            name="cedula"
            placeholder="Ingrese la cédula..."
            leyenda="Esta cédula no pertenece a ninguna región "
            expressionRegular={expresiones.cedula}
            tipoExpresion="1"
          />
          <Input
            estado={nombreV}
            cambiarEstado={cambiarNombreV}
            label="Nombre"
            type="text"
            name="nombre"
            placeholder="Ingrese el nombre..."
            leyenda="El nombre debe tener de 4 a 20 caracteres y solo puede contener letras y espacios"
            expressionRegular={expresiones.nombre}
            tipoExpresion="2"
          />
          <Input
            estado={direccionV}
            cambiarEstado={cambiarDireccionV}
            label="Dirección"
            type="text"
            name="direccion"
            placeholder="Ingrese el dirección..."
            leyenda="La dirección debe tener de 4 a 50 caracteres y solo puede contener letras, números y espacios"
            expressionRegular={expresiones.direccion}
            tipoExpresion="2"
          />
          <Input
            estado={telefonoV}
            cambiarEstado={cambiarTelefonoV}
            label="Teléfono"
            type="text"
            name="telefono"
            placeholder="Ingrese el teléfono..."
            leyenda="El teléfono debe de ser de 8 a 10 dígitos y solo puede contener números enteros positivos"
            expressionRegular={expresiones.telefono}
            tipoExpresion="2"
          />
          <Input
            estado={correoV}
            cambiarEstado={cambiarCorreoV}
            label="Correo"
            type="email"
            name="correo"
            placeholder="Ingrese el correo..."
            leyenda="Se espera una '@'"
            expressionRegular={expresiones.correo}
            tipoExpresion="2"
          />
          <Input
            estado={fechaV}
            cambiarEstado={cambiarFechaV}
            label="Fecha de nacimiento"
            type="text"
            name="fecha"
            placeholder="Ingrese la fecha de nacimiento..."
            leyenda="Ingrese una fecha con el siguiente formato yyyy-mm-dd, cumpliendo los 16 años de edad!"
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
              className="btn2 btn-primario btn-block"
              value="Ingresar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editar;
