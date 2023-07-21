import { Router } from "express";
import charactersRoutes from "./charactersRoutes.js";

const router = Router();

router.use("/characters", charactersRoutes);

export default router;
