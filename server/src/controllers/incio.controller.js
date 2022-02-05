import { getConnection, sql, queries } from "../database";

export const caja = async (req, res) => {
  let result;
  const pool = await getConnection();

  result = await pool.request().query(queries.caja);

  res.send(result.recordset[0]);
};

export const procT = async (req, res) => {
  let result;
  const pool = await getConnection();

  result = await pool.request().query(queries.procT);

  res.send(result.recordset[0]);
};

export const nCompras = async (req, res) => {
  let result;
  const pool = await getConnection();

  result = await pool.request().query(queries.nCompras);

  res.send(result.recordset[0]);
};

export const clientT = async (req, res) => {
  let result;
  const pool = await getConnection();

  result = await pool.request().query(queries.clientT);

  res.send(result.recordset[0]);
};
