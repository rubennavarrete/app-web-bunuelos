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
  onChangeAgregar,
  leyenda,
  expressionRegular,
  tipoExpresion,
}) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  //   const validacion = () => {
  //     if(expressionRegular.test(estado.campo)){
  //         console.log("Imput correcto")
  //     } else {
  //         console.log("Imput incorecto")
  //     }
  //   };
  const validacion = () => {
    if (tipoExpresion === "1") {
      if (ValidarCedula(estado.campo)) {
        console.log(
          "En estado de la sedula viene verificado como: ",
          estado.campo
        );
        cambiarEstado({ ...estado, validado: true });
      } else {
        cambiarEstado({ ...estado, validado: false });
      }
    } else if (tipoExpresion === "2") {
      if (expressionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, validado: true });
      } else {
        cambiarEstado({ ...estado, validado: false });
      }
    }
  };

  return (
    <div className="campo-form-cliente">
      <label
        htmlFor={name}
        className={`${
          estado.validado !== undefined
            ? estado.validado
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
            estado.validado !== undefined
              ? estado.validado
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
            estado.validado !== undefined
              ? estado.validado
                ? "validacion-img-correcto"
                : "validacion-img-incorrecto"
              : ""
          }`}
          src={estado.validado ? checkCircle : close}
          alt=""
        />
      </div>
      <div
        id="grup"
        className={`leyenda-error ${
          estado.validado !== undefined
            ? estado.validado
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
