import { Router } from "express";
import * as controllers from "../controllers/charactersController.js";

const router = Router();

//Path localhost/api/characters
router.get("/", controllers.getCharacters);
router.get("/char/:id", controllers.getCharacter);
router.post("/", controllers.createCharacter);
router.put("/char/:id", controllers.updateCharacter);
router.delete("/char/:id", controllers.deleteCharacter);

export default router;
