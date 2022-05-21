const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "161.35.14.175",
  database: "Bunuelos",
  password: "postgres",
  port: 3232,
};

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;
}

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query("SELECT NOW()");
  await client.end();

  return now;
}

export async function getConnection() {
  try {
    const pool = new Pool(credentials);
    return pool;
  } catch (error) {
    console.error(error);
  }
}
