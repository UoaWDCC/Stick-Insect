import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("GET: /email - received");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /email - received");
});

export default router;
