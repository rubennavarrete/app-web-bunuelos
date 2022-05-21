import { getConnection, sql, queries } from "../database";

export const caja = async (req, res) => {
  let result;
  const pool = await getConnection();

  result = await pool.query(queries.caja);
  console.log("resultado caja hoy", result.rows[0]);
  res.send(result.rows[0]);
};

export const procT = async (req, res) => {
  let result;
  const pool = await getConnection();

  result = await pool.query(queries.procT);

  console.log("productos totales", result.rows[0]);
  res.send(result.rows[0]);
};

export const nCompras = async (req, res) => {
  let result;
  const pool = await getConnection();

  result = await pool.query(queries.nCompras);

  res.send(result.rows[0]);
};

export const clientT = async (req, res) => {
  let result;
  const pool = await getConnection();

  result = await pool.query(queries.clientT);

  res.send(result.rows[0]);
};
