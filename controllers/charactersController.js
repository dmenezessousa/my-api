import CharactersModel from "../models/Characters.js";
import { response } from "express"

//Get all characters
export const getCharacters = async (req, res) => {
  try {
    let getCharacters = await CharactersModel.find()
    res.json(getCharacters)
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};

//Get character by ID
export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params
    const getCharacterById = await CharactersModel.findById(id);

    if (getCharacterById) {
      return res.json(getCharacterById);
    }

    res.status(404).json({message: "Character not found"})
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};

//Create a new Character
export const createCharacter = async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};

//Update a characters
export const updateCharacter = async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};

//Delete a character
export const deleteCharacter = async (req, res) => {
  try {
    
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};