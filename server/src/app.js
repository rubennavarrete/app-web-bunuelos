import express from "express";
import config from "./config";
import morgan from "morgan";
import cors from "cors";

// importamos las rutas
import authRouter from "./routes/auth.routes";
import clientesRouter from "./routes/clientes.routes";
import productosRouter from "./routes/productos.routes";
import ventasRouter from "./routes/ventas.routes";
import inicioRouter from "./routes/inicio.routes";
import reportesRouter from "./routes/reportes.routes";


const app = express();

var whitelist = ["http://localhost:3030"];
var corsOptions = {
  origin: function (origin, callback) {
    console.log("***********", origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(morgan("tiny"));

app.use(cors("*"));

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

//Rutas para gestionar ventas
app.use("/api", ventasRouter);

//Rutas para gestionar el inicio
app.use("/api", inicioRouter);

//Rutas para gestionar los reportes
app.use("/api", reportesRouter);

export default app;
