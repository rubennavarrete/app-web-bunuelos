import { getConnection, sql, queries } from "../database";

//Metodo para obtener todos los productos de la base de datos

export const obtenerProductos = async (req, res) => {
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
    const result = await pool.request().query(queries.obtenerProductos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const ingresarProducto = async (req, res) => {
  const { codProducto, nombre, categoria, precio, stock, fechElab, foto } =
    req.body;
  console.log(codProducto, nombre, categoria, precio, stock, fechElab);
  if (
    codProducto == null ||
    nombre == null ||
    categoria == null ||
    precio == null ||
    stock == null ||
    fechElab == null
  ) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("codProducto", sql.VarChar, codProducto)
      .input("nombre", sql.VarChar, nombre)
      .input("categoria", sql.Char, categoria)
      .input("precio", sql.Float, precio)
      .input("stock", sql.Int, stock)
      .input("fechaElab", sql.Date, fechElab)
      .input("foto", sql.VarChar, foto)
      .query(queries.ingresarProducto);

    res.json({
      codProducto,
      nombre,
      categoria,
      precio,
      stock,
      fechElab,
      foto,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const editarProducto = async (req, res) => {
  const { nombre, categoria, precio, stock, fechElab, foto } = req.body;
  console.log(nombre, categoria, precio, stock, fechElab);
  //viene desde el interno
  const { codProducto } = req.params;
  //desde el body
  if (
    nombre == null ||
    categoria == null ||
    precio == null ||
    stock == null ||
    fechElab == null
  ) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("codProducto", sql.VarChar, codProducto)
      .input("nombre", sql.VarChar, nombre)
      .input("categoria", sql.Char, categoria)
      .input("precio", sql.Float, precio)
      .input("stock", sql.Int, stock)
      .input("fechaElab", sql.Date, fechElab)
      .input("foto", sql.VarChar, foto)
      .query(queries.editarProducto);

    res.json({
      nombre,
      categoria,
      precio,
      stock,
      fechElab,
      foto,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const borrarProducto = async (req, res) => {
  const { codProducto } = req.params;
  const pool = await getConnection();
  const result = await pool

    .request()
    .input("codProducto", codProducto)
    .query(queries.borrarProducto);

  console.log("resultado de la eliminacion: ", result);

  res.send(result.recordset[0]);
};

export const buscarProducto = async (req, res) => {
  const { codProducto } = req.params;
  let result;
  const pool = await getConnection();

  if (codProducto !== "null") {
    result = await pool

      .request()
      .input("codProducto", codProducto)
      .query(
        "Select * from Producto where [codProducto] LIKE '" + codProducto + "%'"
      );
  } else {
    result = await pool.request().query(queries.obtenerProductos);
  }

  res.send(result.recordset);
};
