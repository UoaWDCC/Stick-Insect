import express from "express";
// eslint-disable-next-line import/extensions
import states from "./states-routes.js";

const router = express.Router();

router.use("/states", states);

export default router;
