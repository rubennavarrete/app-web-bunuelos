import { getConnection, sql, queries } from "../database";

//Metodo para obtener todos los productos de la base de datos

export const obtenerProductos = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.obtenerProductos);
  res.json(result.recordset);
};
