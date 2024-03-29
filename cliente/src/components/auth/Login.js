import React, { useState, useContext, useEffect } from "react";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";
import jwt_decode from "jwt-decode";

const Login = (props) => {
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // En caso de que el password o usuario no exista
  useEffect(() => {
    if (autenticado) {
      // props.history.push("/inicio");
      const token = localStorage.getItem("token");
      var decoded = jwt_decode(token);
      if (decoded.tipoUs === "V") window.location = "/productos";
      else window.location = "/inicio";
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    user: "",
    password: "",
  });

  // extraer de usuario
  const { user, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario quiere iniciar sesión
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (user.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }

    // Pasarlo al action
    iniciarSesion({ usernameUs: user, contrasenaUs: password });
  };

  return (
    <div className="form-usuario">
      <div className="franga-central">
        <div className="img-box">
          <img
            className="login-img"
            src="https://firebasestorage.googleapis.com/v0/b/bunuelosdias-cdb3b.appspot.com/o/trash%2FLogo.svg?alt=media&token=f27e8d4c-5c4e-4bbc-ad3a-d72c5565d89b"
            alt=""
          />
        </div>

        <div className="login-box">
          {alerta ? (
            <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
          ) : null}
          <div className="contenedor-form sombra-dark">
            <h1>Iniciar Sesión</h1>

            <form onSubmit={onSubmit}>
              <div className="campo-form">
                <label htmlFor="user">Usuario</label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  placeholder="Tu Usuario"
                  value={user}
                  onChange={onChange}
                />
              </div>

              <div className="campo-form">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Tu Contraseña"
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

              <div class="info">
                <span>
                  Made by <i class="fa fa-heart"></i>
                  <a href="#">Ruben Valencia</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
