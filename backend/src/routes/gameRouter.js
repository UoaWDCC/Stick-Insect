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
    rounds: [
      {
        roundNum: 1,
        backgroundId: "bg2",
        timeTaken: 7,
        isFound: true,
      },
      {
        roundNum: 2,
        backgroundId: "bg2",
        timeTaken: 3,
        isFound: true,
      },
      {
        roundNum: 3,
        backgroundId: "bg1",
        timeTaken: 14,
        isFound: false,
      },
    ],
    isFirstAttempt: false,
  });
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
