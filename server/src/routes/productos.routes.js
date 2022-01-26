import { Router } from "express";
import {
  obtenerProductos,
  ingresarProducto,
  editarProducto,
  borrarProducto,
  buscarProducto,
} from "../controllers/productos.cotroller";

const router = Router();

router.get("/productos", obtenerProductos);

router.post("/productos", ingresarProducto);

router.put("/productos/:codProducto", editarProducto);

router.delete("/productos/:codProducto", borrarProducto);

router.get("/productos/buscar/:codProducto", buscarProducto);

export default router;
