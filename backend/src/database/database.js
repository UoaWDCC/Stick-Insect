import Mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.DB_HOST;

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

export default connectDB;
