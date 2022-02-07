import React, { useContext } from "react";
import Swal from "sweetalert2";
import clienteAxios from "../../config/axios";

import clientesContext from "../../context/Clientes/clientesContext";

import ValidarCedula from "../../utils/validarCedula";

// importe de iconos
import checkCircle from "../../assets/checkCircle.svg";
import close from "../../assets/close.svg";
const Input = ({
  estado,
  cambiarEstado,
  label,
  type,
  name,
  placeholder,
  leyenda,
  expressionRegular,
  tipoExpresion,
}) => {
  const clienteContext = useContext(clientesContext);
  const { mostarActualizar } = clienteContext;

  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = async () => {
    if (tipoExpresion === "1") {
      if (ValidarCedula(estado.campo)) {
        cambiarEstado({ ...estado, valido: true });

        if (!mostarActualizar && estado.campo.length === 10) {
          const resultado = await clienteAxios.get(
            `/api/clientes/buscar/${estado.campo}`
          );

          if (resultado.data[0].cedulaCli !== undefined) {
            Swal.fire({
              title: " Alto",
              text: "El cliente que intenta registrar ya existe en la base de datos. Prueba con otra cedula!",
              icon: "warning",
            });

            cambiarEstado({ ...estado, campo: "", valido: null });
          }
        }
      } else {
        cambiarEstado({ ...estado, valido: false });
      }
    } else if (tipoExpresion === "2") {
      if (expressionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: true });
      } else {
        cambiarEstado({ ...estado, valido: false });
      }
    }
  };

  return (
    <div className="campo-form-cliente">
      <label
        htmlFor={name}
        className={`${
          estado.valido !== null
            ? estado.valido
              ? "validacion-label-correcto"
              : "validacion-label-incorrecto"
            : ""
        }`}
      >
        {label}
      </label>
      <div className="grup-input grup-cliente">
        <input
          type={type}
          className={`input-text ${
            estado.valido !== null
              ? estado.valido
                ? ""
                : "validacion-input-incorrecto"
              : ""
          }`}
          name={name}
          placeholder={placeholder}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion} //propiedad que ejecuta una funcion cuando precionamos una tecla y la soltamos
          onBlur={validacion} // propiedad que ejecuta una funcion cuando damos clik fuera del imput
          disabled={
            mostarActualizar ? (name === "cedula" ? true : false) : null
          }
        />
        <img
          className={`${
            estado.valido !== null
              ? estado.valido
                ? "validacion-img-correcto"
                : "validacion-img-incorrecto"
              : ""
          }`}
          src={estado.valido ? checkCircle : close}
          alt=""
        />
      </div>
      <div
        id="grup"
        className={`leyenda-error ${
          estado.valido !== null
            ? estado.valido
              ? "leyenda-error-correcto"
              : "leyenda-error-incorrecto"
            : ""
        }`}
      >
        <p>{leyenda}</p>
      </div>
    </div>
  );
};

export default Input;
