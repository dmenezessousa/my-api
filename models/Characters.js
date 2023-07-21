import mongoose from "mongoose";
const Schema = mongoose.Schema;

let CharactersSchema = new Schema({
  id: { type: Number, trim: true },
  name: { type: String, trim: true },
  status: { type: String, trim: true },
  species: { type: String, trim: true },
  gender: { type: String, trim: true },
  origin: {
    name: {type: String,trim: true},
  },
  location: {
    name:{type: String, trim:true}
  },
  image:{type: String, trim:true}
},
  { timestamps: true }
);

export default mongoose.model("characters", CharactersSchema);
