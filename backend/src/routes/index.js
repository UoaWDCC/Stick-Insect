import express from "express";

// eslint-disable-next-line import/extensions
import api from "./api/index.js";

const router = express.Router();

// TODO Jason: remove
router.use("/", (req, res) => {
  res.json("hi");
});

router.use("/api", api);

// router.get("/api", (req, res) => {
//   res.status(200).json("hello!!!");
// });
export default router;
