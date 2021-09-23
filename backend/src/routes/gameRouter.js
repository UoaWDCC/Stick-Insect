import express from "express";

const Game = require("../models/game");

const router = express.Router();

router.get("/", (req, res) => {
  Game.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
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
      console.log(err);
    });
});

export default router;
