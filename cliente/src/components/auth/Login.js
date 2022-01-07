import React, { useState } from "react";

const Login = () => {
  //State para iniciar Sesión
  const [usuario, guardarUsuario] = useState({
    correo: "",
    password: "",
  });

  //Extraer de usuario
  const { correo, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario quiera iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no haya campos vacios

    //Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sonbra-dark">
        <h1>Iniciar Sesión</h1>

        <form>
          <div className="campo-form">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Correo"
              value={correo}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
