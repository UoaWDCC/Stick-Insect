import mongoose from "mongoose";

const { Schema } = mongoose;
const Round = require("./round");

const gameSchema = new Schema({
  rounds: [Round],
  isFirstAttempt: {
    type: Boolean,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
