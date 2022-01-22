import express from "express";
import config from "./config";

// importamos las rutas
import authRouter from "./routes/auth.routes";
import clientesRouter from "./routes/clientes.routes";
import productosRouter from "./routes/productos.routes";

const app = express();

//seting
app.set("port", config.port);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas para gestionar la autenticacion
app.use("/api", authRouter);

//Rutas para gestionar clientes
app.use("/api", clientesRouter);

//Rutas para gestionar productos
app.use("/api", productosRouter);

export default app;
