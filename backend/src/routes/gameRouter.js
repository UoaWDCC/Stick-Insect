import express from "express";
// eslint-disable-next-line import/extensions
import Game from "../models/game.js";

const router = express.Router();

router.get("/", (req, res) => {
  Game.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
});

router.post("/", (req, res) => {
  const testGame = new Game({
    rounds: req.body.rounds,
    isFirstAttempt: req.body.isFirstAttempt,
  });
  console.log(testGame);
  testGame
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
});

export default router;
