import express from 'express';
import mongoose from 'mongoose';

// Setup Express
const app = express();
const port = process.env.PORT || 3001;

// Setup body-parser
app.use(express.json());

// Setup our routes.
// import routes from "./routes";
import routes from "./routes/index.js";
app.use("/", routes);
mongoose. connect('mongodb://localhost:27017/stins', {useNewUrlParser: true})
    .then(() => app.listen(port, ()=> console.log(`App server listening on port ${port}!`)));
