import { Router } from "express";
import * as controllers from "../controllers/charactersController.js";

const router = Router();

//Path localhost/api/characters
router.get("/", controllers.getCharacters);
router.get("/name/:name", controllers.getCharacterByName);
router.get("/species/:species", controllers.getCharacterBySpecies);
router.get("/gender/:gender", controllers.getCharacterByGender);
router.get("/:id", controllers.getCharacter);
router.get("/char/:charId", controllers.getCharacterByCharID);
router.post("/", controllers.createCharacter);
router.put("/:id", controllers.updateCharacter);
router.delete("/:id", controllers.deleteCharacter);

export default router;
