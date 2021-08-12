import express from "express";
const router = express.Router();

import api from "./api/index.js";

// TODO Jason: remove 
router.use('/', (req, res) => {
    res.json("hi")
})

router.use("/api", api);

// router.get("/api", (req, res) => {
//   res.status(200).json("hello!!!");
// });
export default router;
