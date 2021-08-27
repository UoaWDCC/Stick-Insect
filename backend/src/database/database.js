import Mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.DB_HOST;

// Create schema for game result
const gameSchema = new Mongoose.Schema({
  isFirstAttempt: String,
  rounds: [
    {
      roundNum: String,
      insectType: String,
      backgroundType: String,
      time: String,
      isCorrect: String,
    },
  ],
});

// create model for game result
const Game = Mongoose.model("Game", gameSchema);

// This function connects our server to MongDB Atlas
async function connectDB() {
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = Mongoose.connection;

  db.on("error", () => console.error("Error occured"));
  db.once("open", () => {
    console.log("DB Successfully Connected!");
  });
}

// This function adds game to MongoDB Atlas database
export async function addGameResult(gameResult) {
  return new Game(gameResult)
    .save()
    .then((data) => console.log("Game successfully added: " + data));
}
