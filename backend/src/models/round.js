import mongoose from "mongoose";

const { Schema } = mongoose;

const roundSchema = new Schema({
  round: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  isFound: {
    type: Boolean,
    required: true,
  },
});

export default roundSchema;
