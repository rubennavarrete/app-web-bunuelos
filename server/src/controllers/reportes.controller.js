import { getConnection, sql, queries } from "../database";

export const OrdenCompra = async (req, res) => {
    let result;
    const pool = await getConnection();
  
    result = await pool.request().query(queries.OrdenCompra);
  
    res.send(result.recordset);
};

export const PporAcabarse = async (req, res) => {
    let result;
    const pool = await getConnection();
  
    result = await pool.request().query(queries.PporAcabarse);
  
    res.send(result.recordset);
};

export const Pcaducados = async (req, res) => {
    let result;
    const pool = await getConnection();
  
    result = await pool.request().query(queries.Pcaducados);
  
    res.send(result.recordset);
};

export const CumpleañosCli = async (req, res) => {
    let result;
    const pool = await getConnection();
  
    result = await pool.request().query(queries.CumpleañosCli);
  
    res.send(result.recordset);
};

export const factura = async (req, res) => {
    let result;
    const pool = await getConnection();
  
    result = await pool.request().query(queries.factura);
  
    res.send(result.recordset);
};