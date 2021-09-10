import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("GET: /game - received");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /game - received");
});

export default router;
