import mongoose from "mongoose";

const { Schema } = mongoose;

const roundSchema = new Schema({
  roundNum: {
    type: Number,
    required: true,
  },
  backgroundId: {
    type: String,
    required: true,
  },
  timeTaken: {
    type: Number,
    required: true,
  },
  isFound: {
    type: Boolean,
    required: true,
  },
});

const Round = mongoose.model("Round", roundSchema);
module.exports = Round;
