import express from "express";
import routes from "./routes/index.js";
import { addGameResult, connectDB } from "./database/database.js";
import { dataSet } from "./mockData/data.js";

// Setup Express
const app = express();
const port = process.env.PORT || 3001;

// Setup body-parser
app.use(express.json());

// Setup our routes.
// import routes from "./routes";
app.use("/", routes);

// Connect Database
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server now running on port ${port}`);
  });
});

// Adds game result to the database
// Refer to the structure of game result in data.js (mock data)
const testAddGameResult = (gameResult) => {
  addGameResult(gameResult);
};

const oneGameResult = dataSet[0];
testAddGameResult(oneGameResult);
