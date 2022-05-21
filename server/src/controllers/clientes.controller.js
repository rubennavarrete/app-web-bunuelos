import { getConnection, sql, queries } from "../database";

import validar from "../services/auth.service";

// Este metodo nos trae todos los clientes de la base de datos
export const obtenerClientes = async (req, res) => {
  // const cookies = req.headers.cookie;
  // if (!cookies)
  //   return res.json({ msg: "No tienes autorizacion para ver esto" });
  // const validToken = cookies.split("=")[1];
  // if (validToken) {

  // } else {
  //   res.json({ msg: "No tienes autorizacion para ver esto" });
  // }

  try {
    const pool = await getConnection();
    const result = await pool
      // .request()
      .query(queries.obtenerClientes);
    res.json(result.rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crearNuevoCliente = async (req, res) => {
  const { cedulaCli, nombreCli, direccionCli, celularCli, correoCli, fechNac } =
    req.body;
  if (
    cedulaCli == null ||
    nombreCli == null ||
    direccionCli == null ||
    celularCli == null ||
    correoCli == null ||
    fechNac == null
  ) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }

  try {
    const pool = await getConnection();

    await pool
      // .request()
      // .input("cedulaCli", sql.VarChar, cedulaCli)
      // .input("nombreCli", sql.VarChar, nombreCli)
      // .input("direccionCli", sql.VarChar, direccionCli)
      // .input("celularCli", sql.VarChar, celularCli)
      // .input("correoCli", sql.VarChar, correoCli)
      // .input("fechNac", sql.Date, fechNac)
      .query(queries.ingresarClientes, [
        cedulaCli,
        nombreCli,
        direccionCli,
        celularCli,
        correoCli,
        fechNac,
      ]);

    res.json({
      cedulaCli,
      nombreCli,
      direccionCli,
      celularCli,
      correoCli,
      fechNac,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Con este nmetodo se busca a un cliente por su cedula
export const obtenerCliente = async (req, res) => {
  const { cedulaCli } = req.params;
  const pool = await getConnection();
  const result = await pool
    // .request()
    // .input("cedulaCli", cedulaCli)
    .query(queries.buscarClienteCi, [cedulaCli]);
  res.send({ data: result.rows });
};

// Con este nmetodo es para buscar los valores que coincidan
export const buscar = async (req, res) => {
  const { cedulaCli } = req.params;
  let result;
  console.log("cedulaCli", cedulaCli);
  const pool = await getConnection();
  if (cedulaCli !== "null") {
    result = await pool
      // .request()
      // .input("cedulaCli", cedulaCli)
      .query(
        "Select * from Cliente where cedulaCli LIKE '" + [cedulaCli] + "%'"
      );
  } else {
    result = await pool.query(queries.obtenerClientes, [cedulaCli]);
  }

  res.send(result.rows);
};

// Con este nmetodo se busca y elimina a un cliente por su cedula
export const eliminarCliente = async (req, res) => {
  const { cedulaCli } = req.params;
  const pool = await getConnection();
  const result = await pool

    // .request()
    // .input("cedulaCli", cedulaCli)
    .query(queries.eliminarClienteCi, [cedulaCli]);

  console.log("resultado de la eliminacion: ", result);

  res.send(result.rows[0]);
};

export const numeroTotalClientes = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    // .request()
    .query(queries.obtenerTotalClientes);
  res.json(result.rows[0]);
};

export const actualizarCliente = async (req, res) => {
  const { nombreCli, direccionCli, celularCli, correoCli, fechNac } = req.body;
  console.log(nombreCli, direccionCli, celularCli, correoCli, fechNac);
  const { cedulaCli } = req.params;
  if (
    nombreCli == null ||
    direccionCli == null ||
    celularCli == null ||
    correoCli == null
  ) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }

  const pool = await getConnection();

  await pool
    // .request()
    // .input("nombreCli", sql.VarChar, nombreCli)
    // .input("direccionCli", sql.VarChar, direccionCli)
    // .input("celularCli", sql.VarChar, celularCli)
    // .input("correoCli", sql.VarChar, correoCli)
    // .input("fechNac", sql.Date, fechNac)
    // .input("cedulaCli", cedulaCli)
    .query(queries.actualizarClienteCi, [
      nombreCli,
      direccionCli,
      celularCli,
      correoCli,
      fechNac,
      cedulaCli,
    ]);

  res.json({
    cedulaCli,
    nombreCli,
    direccionCli,
    celularCli,
    correoCli,
    fechNac,
  });
};

// export const modificarCliente = async (req, res) => {
//   //llega desde el formulario
//   const { nombre, direccion, celular, correoCli, fecN } = req.body;
//   console.log(nombre, direccion, celular, correoCli, fecN);
//   //viene desde el interno
//   const { cedula } = req.params;
//   //desde el body
//   if (
//     nombre == null ||
//     direccion == null ||
//     celular == null ||
//     correoCli == null
//   ) {
//     return res.status(400).json({
//       msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
//     });
//   }

//   const pool = await getConnection();

//   await pool
//     .request()
//     .input("cedula", sql.VarChar, cedula)
//     .input("nombre", sql.VarChar, nombre)
//     .input("direccion", sql.VarChar, direccion)
//     .input("celular", sql.VarChar, celular)
//     .input("correoCli", sql.VarChar, correoCli)
//     .input("fecN", sql.Date, fecN)
//     .query(queries.modificarCliente);

//   res.json({
//     cedula,
//     nombre,
//     direccion,
//     celular,
//     correoCli,
//     fecN,
//   });
// };
