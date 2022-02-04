import { Router } from "express";
import {
    OrdenCompra,
    PporAcabarse,
    Pcaducados,
    CumpleañosCli,
    factura
  } from "../controllers/reportes.controller";


  const router = Router();

  router.get("/reportes/oc", OrdenCompra);

  router.get("/reportes/acabarse", PporAcabarse);

  router.get("/reportes/caducados", Pcaducados);

  router.get("/reportes/cumple", CumpleañosCli);

  router.get("/reportes/factu",factura);


  export default router;