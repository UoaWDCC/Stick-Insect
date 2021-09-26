import mongoose from "mongoose";
// eslint-disable-next-line import/extensions
import roundSchema from "./round.js";

const { Schema } = mongoose;

const gameSchema = new Schema({
  rounds: [roundSchema],
  isFirstAttempt: {
    type: Boolean,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);
export default Game;
