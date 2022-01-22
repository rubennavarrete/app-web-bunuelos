import { Router } from "express";
import { obtenerProductos } from "../controllers/productos.cotroller";

const router = Router();

router.get("/productos", obtenerProductos);

export default router;
