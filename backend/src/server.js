import express from "express";
import Mongoose from "mongoose";

// Setup our routes.
// import routes from "./routes";
// eslint-disable-next-line import/extensions
import routes from "./routes/index.js";
// eslint-disable-next-line import/extensions
import connectDB from "./database/database.js";

// Setup Express
const app = express();
const port = process.env.PORT || 3001;

// Setup body-parser
app.use(express.json());
app.use("/", routes);

// Connect Database
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server now running on port ${port}`);
  });
});
