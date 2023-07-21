import db from "../db/connection.js"
import CharactersModel from "../models/Characters.js"
import characterApiData from "./charData.json" assert {type: "json"}

let newCharData = characterApiData.map((char) => {
  const charData = {};

  charData.id = char.id
  charData.name = char.name
  charData.status = char.status
  charData.species = char.species
  charData.gender = char.gender
  charData.origin = char.origin?.name
  charData.location = char.location?.name
  charData.image = char.image

  return charData;
});


const seedData = async () => {
  await db.dropDatabase();//reset database
  await CharactersModel.create(newCharData) //seed new API data to database
  console.log("Characters Created");
  await db.close()
};

seedData()