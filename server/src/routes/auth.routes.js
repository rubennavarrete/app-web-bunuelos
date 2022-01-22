import { Router } from "express";

import { autenticarUsuario } from "../controllers/auth.controller";

const router = Router();

router.post("/login", autenticarUsuario);

export default router;
