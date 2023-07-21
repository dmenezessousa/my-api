import CharactersModel from "../models/Characters.js";
import { response } from "express";
import { ConnectionPoolClosedEvent } from "mongodb";

//Get all characters
export const getCharacters = async (req, res) => {
  try {
    let getCharacters = await CharactersModel.find();
    res.json(getCharacters);
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};

//Get character by ID
export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const getCharacterById = await CharactersModel.findById(id);

    if (getCharacterById) {
      return res.json(getCharacterById);
    }

    res.status(404).json({ message: "Character not found" });
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};

//Create a new Character
export const createCharacter = async (req, res) => {
  try {
    const createNewCharacter = new CharactersModel.create(req.body);
    await CharactersModel.save();
    res.status(201).json(createNewCharacter);
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};

//Update a characters
export const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCharacter = await CharactersModel.findByIdAndUpdate(
      id,
      req.body
    );
    res.status(201).json(updatedCharacter);
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};

//Delete a character
export const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  const deletedCharacter = await CharactersModel.findByIdAndDelete(id);

  if (deletedCharacter) {
    return res.status(200).send("Character deleted!");
  }
  try {
  } catch (err) {
    console.log(err);
    response.status(500).json({ error: err.message });
  }
};
