import express from "express";
import Mongoose from "mongoose";

// Setup Express
const app = express();
const port = process.env.PORT || 3001;

// Setup body-parser
app.use(express.json());

// Setup our routes.
// import routes from "./routes";
import routes from "./routes/index.js";
import { connectDB } from "./database/database.js";
app.use("/", routes);

// Connect Database
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server now running on port ${port}`);
  });
});
