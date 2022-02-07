import { getConnection, sql, queries } from "../database";

//Obtener todos los productos que pueden ser vendidos

export const mostrarPAVender = async (req, res) => {
  try {
    console.log("estoy en el try");

    const pool = await getConnection();
    const result = await pool.request().query(queries.mostrarPAVender);
    res.json(result.recordset);
  } catch (error) {
    console.log(error);
    // res.status(500);
    // res.send(error.message);
  }
};

export const detalleventa = async (req, res) => {
  const { no } = req.params;
  let result;
  try {
    const pool = await getConnection();

    if (no !== "null") {
      result = await pool.request().input("no", no).query(queries.detalleventa);
    }

    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const InsertarOrdenCompra = async (req, res) => {
  const { tt, fech, cedulaCli, nombreUS } = req.body;
  console.log(
    "entre a la fucion de controlller" + tt,
    fech,
    cedulaCli,
    nombreUS
  );
  if (tt == null || fech == null || cedulaCli == null || nombreUS == null) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }
  try {
    const pool = await getConnection();
<<<<<<< HEAD
    const result = await pool.request()
      .input("Vtotal", sql.Float, tt)
=======
    const result = await pool
      .request()
      .input("Vtotal", sql.Decimal, tt)
>>>>>>> 545bf85f2e21fbdb70e355b4ec85952ad2428098
      .input("fech", sql.Date, fech)
      .input("cedulC", sql.VarChar, cedulaCli)
      .input("usernameU", sql.VarChar, nombreUS)
      .query(queries.InsertarOrdenCompra);

<<<<<<< HEAD
      res.json({
        Vtotal,
        fech,
        cedulC,
        usernameU
      });
  } catch (error) {
    //res.status(500);
   // res.send(error.message);
  }
};

export const llenarOrdenCompra = async (req, res) => {
  const { oc, Vtotal, fech, cedulC, usernameU } = req.body;
  console.log(oc, Vtotal, fech, cedulC, usernameU);
  if (
    oc == null ||
    Vtotal == null ||
    fech == null ||
    cedulC == null ||
    usernameU == null
  ) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("oc", sql.Int, oc)
      .input("Vtotal", sql.Float, Vtotal)
      .input("fech", sql.Date, fech)
      .input("cedulC", sql.VarChar, cedulC)
      .input("usernameU", sql.VarChar, usernameU)
      .query(queries.llenarOrdenCompra);

=======
>>>>>>> 545bf85f2e21fbdb70e355b4ec85952ad2428098
    res.json({
      Vtotal,
      fech,
      cedulC,
      usernameU,
    });
  } catch (error) {
    //res.status(500);
    // res.send(error.message);
  }
};

// export const llenarOrdenCompra = async (req, res) => {
//   const { oc, Vtotal, fech, cedulC, usernameU } = req.body;
//   console.log(oc, Vtotal, fech, cedulC, usernameU);
//   if (
//     oc == null ||
//     Vtotal == null ||
//     fech == null ||
//     cedulC == null ||
//     usernameU == null
//   ) {
//     return res.status(400).json({
//       msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
//     });
//   }

//   try {
//     const pool = await getConnection();

//     await pool
//       .request()
//       .input("oc", sql.Int, oc)
//       .input("Vtotal", sql.Decimal, Vtotal)
//       .input("fech", sql.Date, fech)
//       .input("cedulC", sql.VarChar, cedulC)
//       .input("usernameU", sql.VarChar, usernameU)
//       .query(queries.llenarOrdenCompra);

//     res.json({
//       oc,
//       Vtotal,
//       fech,
//       cedulC,
//       usernameU,
//     });
//   } catch (error) {
//     // res.status(500);
//     // res.send(error.message);
//   }
// };
//--------------------------------------------------------

export const insertarDv = async (req, res) => {
  // console.log(req.body);
  const array = req.body;
  // console.log(array);
  if (array.lenght == 0) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }
  let _SQL_INSERT_DV = "";
  array.map((item, index) => {
    _SQL_INSERT_DV +=
      " exec sp_insertarDetalleVenta " +
      " '" +
      item.codProducto +
      "'," +
      item.numeroOrden +
      "," +
      item.count;
    console.log(item, index);
    console.log(_SQL_INSERT_DV);
  });

  //res.status(200).send({msg:"Completo"});
  try {
    const pool = await getConnection();

    await pool.request().query(_SQL_INSERT_DV);

    res.json({
      msg: "Productos insertados correctamente",
      status: 1,
    });
  } catch (error) {}
  // } catch (error) {
  // res.status(500);
  // res.send(error.message);
  // }
  /*
 // try {
    const pool = await getConnection();

    await pool
      .request()
      .input("codPro", sql.VarChar, codPro)
      .input("nOrd", sql.Int, nOrd)
      .input("cant", sql.Int, cant)
      .query(queries.insertarDv);

    res.json({
      codPro,
      nOrd,
      cant,
    });
 // } catch (error) {
   // res.status(500);
   // res.send(error.message);
 // }*/
};
//--------------------------------------------------------
export const borrarDv = async (req, res) => {
  const { codPro, nOrd, cant } = req.params;
  const pool = await getConnection();
  const result = await pool

    .request()
    .input("codPro", codPro)
    .input("nOrd", nOrd)
    .input("cant", cant)
    .query(queries.borrarDv);

  res.sendStatus(204);
};
//--------------------------------------------------------
export const modificarDv = async (req, res) => {
  const { nOrd, cant } = req.body;
  console.log(nOrd, cant);
  //viene desde el interno
  const { codPro } = req.params;
  //desde el body
  if (nOrd == null || cant == null) {
    return res.status(400).json({
      msg: "Solicitud incorrecta. Por favor rellena todos los campos correctamente",
    });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("codPro", sql.VarChar, codPro)
      .input("nOrd", sql.Int, nOrd)
      .input("cant", sql.Int, cant)
      .query(queries.modificarDv);

    res.json({
      nOrd,
      cant,
    });
  } catch (error) {
    // res.send(error.message);
  }
};
//--------------------------------------------------------

export const OC = async (req, res) => {
  let result;
  const pool = await getConnection();

  result = await pool.request().query(queries.OC);
  console.log(result.data);
  res.send(result.recordset[0]);
};
