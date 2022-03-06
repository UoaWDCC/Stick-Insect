import mongoose from "mongoose";

const { Schema } = mongoose;

const roundSchema = new Schema({
  round: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  isFound: {
    type: Boolean,
    required: true,
  },
});

export default roundSchema;
