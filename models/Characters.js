import mongoose from "mongoose";
import connection from '../db/connection.js'
const Schema = mongoose.Schema;

let CharactersSchema = new Schema(
  {
    charId: { type: Number, trim: true },
    name: { type: String, trim: true },
    status: { type: String, trim: true },
    species: { type: String, trim: true },
    gender: { type: String, trim: true },
    origin: {
      type: String, trim: true ,
    },
    location: {
      type: String, trim: true ,
    },
    image: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("characters", CharactersSchema);
