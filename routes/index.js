import { Router } from "express"
import charactersRoutes from "./charactersRoutes.js"

const router = Router()

router.get("/characters", charactersRoutes);

export default router;