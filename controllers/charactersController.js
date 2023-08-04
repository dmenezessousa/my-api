import Characters from "../models/Characters.js";
// import { response } from "express";

//Get all characters
export const getCharacters = async (req, res) => {
  try {
    let getCharacters = await Characters.find();
    res.json(getCharacters);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const getCharacterByName = async (req, res) => {
  try {
    const { name } = req.params;
    let getCharactersByName = await Characters.find({ name: name });
    res.json(getCharactersByName);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const getCharacterBySpecies = async (req, res) => {
  try {
    let getCharactersBySpecies = await Characters.find({
      species: req.params.species,
    });
    res.json(getCharactersBySpecies);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const getCharacterByGender = async (req, res) => {
  try {
    let getCharacterByGender = await Characters.find({
      gender: req.params.gender,
    });
    res.json(getCharacterByGender);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

//Get character by ID
export const getCharacterByCharID = async (req, res) => {
  try {
    const getCharacterByCharId = await Characters.find({
      charId: req.params.charId,
    });

    if (getCharacterByCharId) {
      return res.json(getCharacterByCharId);
    }

    res.status(404).json({ message: "Character not found" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// export const getCharacter = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const getCharacterById = await Characters.findById(id);

//     if (getCharacterById) {
//       return res.json(getCharacterById);
//     }

//     res.status(404).json({ message: "Character not found" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// };

export const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;

    try {
      const getCharacterById = await Characters.findById(id);

      if (getCharacterById) {
        return res.json(getCharacterById);
      }

      res.status(404).json({ message: "Character not found this time." });
    } catch (error) {
      res.status(404).json({ message: "Character not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};


//Create a new Character
export const createCharacter = async (req, res) => {
  try {
    const createNewCharacter = await Characters.create(req.body);
    res.status(201).json(createNewCharacter);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

//Update a characters
export const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCharacter = await Characters.findByIdAndUpdate(id, req.body);
    res.status(201).json(updatedCharacter);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const updateCharacterByCharID = async (req, res) => {
  try {
    const { charId } = req.params;
    const updateCharacterByCharId = await Characters.findOneAndUpdate(
      charId,
      req.body
    );
    res.status(201).json(updateCharacterByCharId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

//Delete a character
export const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  const deletedCharacter = await Characters.findByIdAndDelete(id);

  if (deletedCharacter) {
    return res.status(200).send("Character deleted!");
  }
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const deleteCharacterByCharID = async (req, res) => {
  const { charId } = req.params;
  const deleteCharacterByCharId = await Characters.findOneAndDelete(charId);

  if (deleteCharacterByCharId) {
    return res.status(200).send("Character deleted!");
  }
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
