import express from "express";
const router = express.Router();

import api from "./api/index.js";
router.use("/api", api);

// router.get("/api", (req, res) => {
//   res.status(200).json("hello!!!");
// });
export default router;
