import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/autenticacion/authContext";

import "./user.css";

const User = (datos) => {
  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { cerrarSesion } = authContext;

  const navigate = useNavigate();

  const cerrar = () => {
    cerrarSesion();
    navigate("/");
  };
  return (
    <div className="user">
      <img src={datos.decoded.urImgUs} alt="imagen de usuario" />
      <h3>{datos.decoded.nombreUS}</h3>
      <p>{datos.decoded.tipoUs === "A" ? "Administrador" : "Vendedor"}</p>
      <button className="button button2" onClick={cerrar}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default User;
