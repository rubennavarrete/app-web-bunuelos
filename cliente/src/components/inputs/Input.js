import React from "react";

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
  mostarActualizar,
  leyenda,
  expressionRegular,
  tipoExpresion,
}) => {
  const onChange = (e) => {
    console.log("Estaso objeto: ", estado);
    if (e.target.value === "") {
      console.log("Esta bacio: ");
      cambiarEstado({ ...estado, campo: null });
    } else {
      cambiarEstado({ ...estado, campo: e.target.value });
      console.log("onchange: ", e.target.value);
    }
  };

  const validacion = () => {
    if (tipoExpresion === "1") {
      if (ValidarCedula(estado.campo)) {
        cambiarEstado({ ...estado, valido: true });
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
