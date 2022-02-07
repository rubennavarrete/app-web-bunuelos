import { Router } from "express";
import {
    mostrarPAVender,
    detalleventa,
    generarOC,
    llenarOrdenCompra,
    insertarDv,
    borrarDv,
    modificarDv,
    OC
  } from "../controllers/ventas.controller";
 
  const router = Router();

  router.get("/ventas", mostrarPAVender);

  router.get("/ventas/:no", detalleventa);

  router.post("/ventas", generarOC);

  router.post("/ventas", llenarOrdenCompra);

  router.post("/ventas", insertarDv);

  router.delete("/ventas/:codPro/:nOrd/:cant", borrarDv);

  router.put("/ventas/:codPro", modificarDv);

  router.get("/ventas/OC", OC);

  export default router;