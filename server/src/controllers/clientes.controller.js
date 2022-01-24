import { getConnection, sql, queries } from "../database";

import validar from "../services/auth.service";

// Este metodo nos trae todos los clientes de la base de datos
export const obtenerClientes = async (req, res) => {
  const cookies = req.headers.cookie;
  if (!cookies)
    return res.json({ msg: "No tienes autorizacion para ver esto" });
  const validToken = cookies.split("=")[1];
  if (validToken) {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(queries.obtenerClientes);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  } else {
    res.json({ msg: "No tienes autorizacion para ver esto" });
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
      .request()
      .input("cedulaCli", sql.VarChar, cedulaCli)
      .input("nombreCli", sql.VarChar, nombreCli)
      .input("direccionCli", sql.VarChar, direccionCli)
      .input("celularCli", sql.VarChar, celularCli)
      .input("correoCli", sql.VarChar, correoCli)
      .input("fechNac", sql.Date, fechNac)
      .query(queries.ingresarClientes);

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
    .request()
    .input("cedulaCli", cedulaCli)
    .query(queries.buscarClienteCi);
  res.send(result.recordset[0]);
};

// Con este nmetodo se busca y elimina a un cliente por su cedula
export const eliminarCliente = async (req, res) => {
  const { cedulaCli } = req.params;
  const pool = await getConnection();
  const result = await pool

    .request()
    .input("cedulaCli", cedulaCli)
    .query(queries.eliminarClienteCi);

  res.sendStatus(204);
};

export const numeroTotalClientes = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.obtenerTotalClientes);
  console.log(result);
  res.json(result.recordset[0][""]);
};
/*
export const actualizarCliente = async (req, res) => {
  const { nombreCli, direccionCli, celularCli, correoCli, fechNac } = req.body;

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
    .request()
    .input("nombreCli", sql.VarChar, nombreCli)
    .input("direccionCli", sql.VarChar, direccionCli)
    .input("celularCli", sql.VarChar, celularCli)
    .input("correoCli", sql.VarChar, correoCli)
    .input("fechNac", sql.Date, fechNac)
    .input("cedulaCli", cedulaCli)
    .query(queries.actualizarClienteCi);

  res.json({
    cedulaCli,
    nombreCli,
    direccionCli,
    celularCli,
    correoCli,
    fechNac,
  });
};*/
export const modificarCliente = async (req, res) => {

  //llega desde el formulario
  const { nombre, direccion, celular, correoCli, fecN } = req.body;
  console.log(nombre, direccion, celular, correoCli, fecN);
  //viene desde el interno
  const { cedula } = req.params;
//desde el body
  if (
    nombre == null ||
    direccion == null ||
    celular == null ||
    correoCli == null
  ) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }

  const pool = await getConnection();

  await pool
    .request()
    .input("cedula", sql.VarChar, cedula)
    .input("nombre", sql.VarChar, nombre)
    .input("direccion", sql.VarChar, direccion)
    .input("celular", sql.VarChar, celular)
    .input("correoCli", sql.VarChar, correoCli)
    .input("fecN", sql.Date, fecN)
    .query(queries.modificarCliente);

  res.json({
    cedula, 
    nombre, 
    direccion, 
    celular, 
    correoCli, 
    fecN
  });
};