import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";

import ProductosContext from "../../context/Productos/productoContext";
import InputProducto from "../inputs/InputProducto";

// importe de iconos
import alertaTriangulo from "../../assets/alert.svg";

const EditarProductos = ({ titulo }) => {
  //Obtener las funcnciones del context de Productos
  const productoContext = useContext(ProductosContext);
  const {
    cerrarEditarProducto,
    agregarProducto,
    actualizar,
    productoActualizar,
    actualizarProducto,
  } = productoContext;

  const categorias = [
    {
      value: "",
    },
    {
      value: "PA",
    },
    {
      value: "RC",
    },
    {
      value: "RF",
    },
    {
      value: "BO",
    },
  ];

  const hoy = new Date().toISOString().substring(0, 10);
  //State para validar los campos del componente input
  const [codigoV, cambiarCodigoV] = useState({ campo: "", valido: null });
  const [nombreV, cambiarNombreV] = useState({ campo: "", valido: null });
  const [categoriaV, cambiarCategoriaV] = useState((categorias.value = ""));
  const [precioV, cambiarPrecioV] = useState({ campo: "", valido: null });
  const [stockV, cambiarStockV] = useState({ campo: "", valido: null });
  const [fechaV, cambiarFechaV] = useState(hoy);
  const [imagenV, cambiarImagenV] = useState({ campo: "", valido: null });
  const [formularioV, cambiarFormularioV] = useState(null);

  const handleChange = (e) => {
    cambiarCategoriaV({ value: e.target.value });
  };

  //Para agregaar un nuevo cliente
  const onSubmitProducto = (e) => {
    e.preventDefault();

    if (
      codigoV.valido === true &&
      nombreV.valido === true &&
      precioV.valido === true &&
      stockV.valido === true &&
      imagenV.valido === true
    ) {
      if (!actualizar) {
        agregarProducto({
          codProducto: codigoV.campo,
          nombre: nombreV.campo,
          categoria: categoriaV.value,
          precio: precioV.campo,
          stock: stockV.campo,
          fechElab: fechaV,
          foto: imagenV.campo,
        });
      } else {
        actualizarProducto({
          codProducto: codigoV.campo,
          nombre: nombreV.campo,
          categoria: categoriaV,
          precio: precioV.campo,
          stock: stockV.campo,
          fechElab: fechaV,
          foto: imagenV.campo,
        });
        console.log("codigoV.campo: ", codigoV.campo);
        console.log("nombreV.campo: ", nombreV.campo);
        console.log("categoriaV: ", categoriaV);
        console.log("precioV.campo: ", precioV.campo);
        console.log("stockV.campo: ", stockV.campo);
        console.log("fechaV: ", fechaV);
        console.log("imagenV.campo: ", imagenV.campo);
      }

      cambiarCodigoV({ campo: "", valido: null });
      cambiarNombreV({ campo: "", valido: null });
      cambiarCategoriaV((categorias.value = ""));
      cambiarPrecioV({ campo: "", valido: null });
      cambiarStockV({ campo: "", valido: null });
      cambiarImagenV({ campo: "", valido: null });
    } else {
      cambiarFormularioV(false);

      setTimeout(() => cambiarFormularioV(null), 4000);
    }
  };

  const expresiones = {
    codigo: /^[A-Z]{2}[0-9]{2}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    precio: /^[0-9]+([.][0-9]+)?$/,
    stock: /^D*[1-9]{1,1}\d{0,2}$/, // 4 numeros del 1 al 1000.
    link: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
  };

  useEffect(() => {
    if (actualizar) {
      cambiarCodigoV({
        campo: productoActualizar[0].codProducto,
        valido: true,
      });
      cambiarNombreV({ campo: productoActualizar[0].nombre, valido: true });
      cambiarPrecioV({ campo: productoActualizar[0].precio, valido: true });
      cambiarCategoriaV(productoActualizar[0].categoria);
      cambiarStockV({ campo: productoActualizar[0].stock, valido: true });
      cambiarFechaV(productoActualizar[0].fechaElab === "" ? "" : hoy);
      cambiarImagenV({ campo: productoActualizar[0].fotoUrl, valido: true });
    }
  }, []);

  useEffect(() => {
    actualizarCategoria();
  }, [agregarProducto]);

  const actualizarCategoria = () => {
    categorias.value = "";
  };

  const visualizar = () => {
    Swal.fire({
      title: `Categoría: ${
        actualizar ? productoActualizar[0].categoria : categoriaV.value
      }`,
      text: `Nombre: ${nombreV.campo}`,
      imageUrl: imagenV.campo,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Custom image",
    });
  };

  return (
    <div className="form-Productos">
      <div className="contenedor-form-cliente">
        <div className="botn-cerrar">
          <button
            type="button"
            className="btn2 btn-block btn-primario redondear"
            onClick={() => cerrarEditarProducto()}
          >
            X
          </button>
        </div>
        <h1>{titulo}</h1>

        <form className="formulario-nuevo-cliente" onSubmit={onSubmitProducto}>
          <InputProducto
            estado={codigoV}
            cambiarEstado={cambiarCodigoV}
            label="Código"
            type="text"
            name="codigo"
            placeholder="Ingrese el código del producto..."
            leyenda="El código debe de ser de 4 caracteres, 2 letras, mayúsculas y dos números "
            expressionRegular={expresiones.codigo}
          />
          <InputProducto
            estado={nombreV}
            cambiarEstado={cambiarNombreV}
            label="Nombre"
            type="text"
            name="nombre"
            placeholder="Ingrese el nombre del producto..."
            leyenda="El nombre debe tener de 4 a 20 caracteres y solo puede contener letras y espacios"
            expressionRegular={expresiones.nombre}
          />
          <div className="campo-form-cliente">
            <label>Categoría</label>
            <div className="select">
              <select
                onChange={(e) => handleChange(e)}
                disabled={actualizar ? true : null}
              >
                {categorias.map((categoria) => (
                  <option key={categoria.value} value={categoria.value}>
                    {actualizar
                      ? productoActualizar[0].categoria
                      : categoria.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <InputProducto
            estado={precioV}
            cambiarEstado={cambiarPrecioV}
            label="Precio"
            type="text"
            name="precio"
            placeholder="Ingrese el precio del producto..."
            leyenda="El precio debe de estar comprendido entre los 0.01 ctv hasta los 100 dólares, debe contener punto y no coma"
            expressionRegular={expresiones.precio}
          />
          <InputProducto
            estado={stockV}
            cambiarEstado={cambiarStockV}
            label="Stock"
            type="text"
            name="stock"
            placeholder="Ingrese el stock del producto..."
            leyenda="Ingrese solo números comprendidos entre 1 y 1000"
            expressionRegular={expresiones.stock}
          />
          <div className="grup-input grup-cliente">
            <div className="campo-form-cliente">
              <label>Fecha de Elaboración</label>
              <input
                type="text"
                className="input-text"
                value={fechaV}
                disabled={true}
              />
            </div>
          </div>
          <InputProducto
            estado={imagenV}
            cambiarEstado={cambiarImagenV}
            label="Imagen"
            type="text"
            name="imagen"
            placeholder="Ingrese el link de la imagen del producto..."
            leyenda="Ingrse un link válido"
            expressionRegular={expresiones.link}
          />
          <div className="grup-input grup-cliente">
            <div className="campo-form-cliente">
              <label>Pre-Visualizar</label>
              <button
                type="button"
                className="btn2 btn-block btn-primario visualizar"
                onClick={() => visualizar()}
              >
                Visualizar imagen
              </button>
            </div>
          </div>
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
              value={actualizar ? "Actualizar" : "Agregar"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarProductos;
