import express from "express";
import dotenv from "dotenv"; // this is the library which enables us to use .env file to store secure info
/* eslint-disable */
import gameRouter from "./routes/gameRouter.js";
import emailRouter from "./routes/emailRouter.js";
import connectDB from "./database/database.js";
/* eslint-enable */

dotenv.config(); // enable the dotenv library
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json()); // For all incoming request body express will recognize it as JSON format

app.use("/email", emailRouter); // for all request url starting with :/email, emailRouter will handle it
app.use("/game", gameRouter); // for all request url starting with :/game, gameRouter will handle it

app.get("/", (req, res) => {
  console.log("Received");
  res.status(200).send("Welcome to STINS server");
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error();
  res.status(500).send("Unexpected server error occured.");
});

// Establish connection between server and database.
// When connection is successful, then server listen to PORT.
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server now running on port: ${PORT}`));
});
