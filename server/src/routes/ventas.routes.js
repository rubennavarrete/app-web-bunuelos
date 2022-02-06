import { Router } from "express";
import {
  mostrarPAVender,
  detalleventa,
  InsertarOrdenCompra,
  llenarOrdenCompra,
  insertarDv,
  borrarDv,
  modificarDv,
  OC,
} from "../controllers/ventas.controller";

const router = Router();

router.get("/ventas", mostrarPAVender);

router.get("/ventas/dv/:no", detalleventa);

router.post("/ventas/generarOc", InsertarOrdenCompra);

// router.post("/ventas/llenarOC", llenarOrdenCompra);

router.post("/ventas/insertarDv", insertarDv);

// router.delete("/ventas/:codPro/:nOrd/:cant", borrarDv);

// router.put("/ventas/:codPro", modificarDv);

router.get("/ventas/NumOC", OC);

export default router;
