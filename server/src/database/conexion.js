import sql from "mssql";

const dbSettings = {
  user: "Jessica",
  password: "12345.",
  server: "localhost",
  database: "BonuelosDias",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

export { sql };
