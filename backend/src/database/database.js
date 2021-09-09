import Mongoose from "mongoose"; // import Mongoose API
import dotenv from "dotenv";

/**
 * This file should contain the functions/codes that is related to database queries/configuration.
 * Examples can be functions which do "Send user email to DB" and "Send game data to DB".
 *
 * Other modules (files) will import from this module to do database related jobs.
 * For example, server.js imports connectDB() from this module to make connection to the database.
 */

dotenv.config();
const uri = process.env.DB_HOST;

// This function requests connection establishment to database
export async function connectDB() {
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = Mongoose.connection;
  db.on("error", () => console.error("Error occured")); // If failed to connect
  db.once("open", () => {
    // If successful to connect
    console.log("DB Successfully Connected!");
  });
}
