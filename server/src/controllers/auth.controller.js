import { getConnection, sql, queries } from "../database";

import jwt from "jsonwebtoken";

export const autenticarUsuario = async (req, res) => {
  const { usernameUs, contrasenaUs } = req.body;

  console.log("req.body", req.body);

  //Revisamos que los campos del formulario de login no esten vacios
  if (usernameUs == null || contrasenaUs == null) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }

  try {
    const pool = await getConnection();
    //Revisamos si el usuario ingresado es correcto
    let usuario = await pool
      .request()
      .input("usernameUs", usernameUs)
      .query(queries.obtenerUsuario);

    if (usuario.recordset.length === 0) {
      return res.status(400).json({
        msg: "Usuario Incorrecto",
      });
    }
    const user = usuario.recordset[0];

    if (user.contrasenaUs !== contrasenaUs) {
      return res.status(400).json({
        msg: "Contraseña Incorrecta",
      });
    }

    const datos = {
      nombreUS: user.nombreUS,
      tipoUs: user.tipoUs,
      urImgUs: user.urImgUs,
      usernameUS: user.usernameUs,
    };
    console.log("->", datos);
    const token = jwt.sign(datos, process.env.SECRETA, {
      expiresIn: "7d",
    });
    console.log(token);
    res
      .cookie("token", token, {
        expires: new Date(Date.now() + 9999999),
        httpOnly: false,
      })
      .send({ user: datos, token: token });
  } catch (error) {
    res.json({ msg: error });
  }
};
