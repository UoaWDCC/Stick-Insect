import express from "express";

// Setup Express
const app = express();
const port = process.env.PORT || 3001;

// Setup body-parser
app.use(express.json());

// Setup our routes.
// import routes from "./routes";
import routes from "./routes/index.js";
app.use("/", routes);

app.listen(port, () => console.log(`App server listening on port ${port}!`));
