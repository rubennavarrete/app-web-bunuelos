import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";

const RutaPrivada = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { autenticado } = authContext;

  // useEffect(() => {
  //     usuarioAutenticado();
  //     // eslint-disable-next-line
  // }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado ? <Navigate to="/" /> : <Component {...props} />
      }
    />
  );
};

export default RutaPrivada;
