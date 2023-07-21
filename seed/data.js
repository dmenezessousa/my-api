import db from "../db/connection.js";
import CharactersModel from "../models/Characters.js";
import characterApiData from "./charData.json" assert { type: "json" };

let newCharData = characterApiData.map((char) => {
  const charData = {};

  charData.charId = char.id;
  charData.name = char.name.toLowerCase();
  charData.status = char.status.toLowerCase();
  charData.species = char.species.toLowerCase();
  charData.gender = char.gender.toLowerCase();
  charData.origin = char.origin.name;
  charData.location = char.location.name;
  charData.image = char.image;

  return charData;
});

const seedData = async () => {
  await db.dropDatabase(); //reset database
  await CharactersModel.create(newCharData); //seed new API data to database
  console.log("Characters Created");
  await db.close();
};

seedData();
