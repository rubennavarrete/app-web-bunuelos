import { Router } from "express";
import {
    caja,
    procT,
    nCompras,
    clientT
  } from "../controllers/incio.controller";

  const router = Router();

  router.get("/inicio/caj", caja);

  router.get("/inicio/pt", procT);

  router.get("/inicio/cn", nCompras);

  router.get("/inicio/ct", clientT);


  export default router;