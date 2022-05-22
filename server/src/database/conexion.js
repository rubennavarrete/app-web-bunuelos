const { Pool } = require("pg");

const credentials = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_SERVER,
  port: process.env.DB_PORT,
};

export async function getConnection() {
  try {
    const pool = new Pool(credentials);
    return pool;
  } catch (error) {
    console.error(error);
  }
}
