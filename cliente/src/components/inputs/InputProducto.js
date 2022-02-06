import React, { useContext } from "react";

import ProductosContext from "../../context/Productos/productoContext";
import clienteAxios from "../../config/axios";
import Swal from "sweetalert2";

// importe de iconos
import checkCircle from "../../assets/checkCircle.svg";
import close from "../../assets/close.svg";

const InputProducto = ({
  estado,
  cambiarEstado,
  label,
  type,
  name,
  placeholder,
  leyenda,
  expressionRegular,
}) => {
  //Obtener las funcnciones del context de Productos
  const productoContext = useContext(ProductosContext);
  const { actualizar } = productoContext;

  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = async () => {
    if (expressionRegular.test(estado.campo)) {
      cambiarEstado({ ...estado, valido: true });
      if (!actualizar && name === "codigo") {
        const resultado = await clienteAxios.get(
          `/api/productos/buscar/${estado.campo ? estado.campo : "null"}`
        );
        if (resultado.data[0].codProducto !== undefined) {
          Swal.fire({
            title: " Alto",
            text: "El producto que intenta registrar, ya existe en la base de datos. Prueba con otra Código!",
            icon: "warning",
          });

          cambiarEstado({ ...estado, campo: "", valido: null });
        }
      }
    } else {
      cambiarEstado({ ...estado, valido: false });
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
          disabled={actualizar ? (name === "codigo" ? true : false) : null}
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

export default InputProducto;
