import { Router } from "express";
import {
    OrdenCompra,
    PporAcabarse,
    Pcaducados,
    CumpleañosCli,
    factura,
    masVendido
  } from "../controllers/reportes.controller";


  const router = Router();

  router.get("/reportes/oc", OrdenCompra);

  router.get("/reportes/acabarse", PporAcabarse);

  router.get("/reportes/caducados", Pcaducados);

  router.get("/reportes/cumple", CumpleañosCli);

  router.get("/reportes/factu",factura);

  router.get("/reportes/masVendido", masVendido);

  export default router;