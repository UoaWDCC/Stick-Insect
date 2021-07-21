import express from "express";
import states from "./states-routes.js";

const router = express.Router();

router.use("/states", states);

export default router;
