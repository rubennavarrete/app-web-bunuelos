import { Router } from "express";
import {
  obtenerClientes,
  crearNuevoCliente,
  obtenerCliente,
  eliminarCliente,
  numeroTotalClientes,
  actualizarCliente,
} from "../controllers/clientes.controller";

const router = Router();

router.get("/clientes", obtenerClientes);

router.get("/clientes/contar", numeroTotalClientes);

router.get("/clientes/:cedulaCli", obtenerCliente);

router.post("/clientes", crearNuevoCliente);

router.delete("/clientes/:cedulaCli", eliminarCliente);

router.put("/clientes/:cedulaCli", actualizarCliente);

export default router;
