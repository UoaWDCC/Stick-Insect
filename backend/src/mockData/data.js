/**
 * Below is the mock data for games
 */
const game1 = {
  rounds: [
    {
      roundNum: 1,
      backgroundId: "bg1",
      timeTaken: 10,
      isFound: true,
    },
    {
      roundNum: 2,
      backgroundId: "bg2",
      timeTaken: 15,
      isFound: true,
    },
    {
      roundNum: 3,
      backgroundId: "bg3",
      timeTaken: 15,
      isFound: false,
    },
  ],
};

const game2 = {
  rounds: [
    {
      roundNum: 1,
      backgroundId: "bg3",
      timeTaken: 3,
      isFound: true,
    },
    {
      roundNum: 2,
      backgroundId: "bg2",
      timeTaken: 6,
      isFound: true,
    },
    {
      roundNum: 3,
      backgroundId: "bg1",
      timeTaken: 6,
      isFound: true,
    },
  ],
};

const game3 = {
  rounds: [
    {
      roundNum: 1,
      backgroundId: "bg2",
      timeTaken: 13,
      isFound: true,
    },
    {
      roundNum: 2,
      backgroundId: "bg2",
      timeTaken: 15,
      isFound: true,
    },
    {
      roundNum: 3,
      backgroundId: "bg1",
      timeTaken: 15,
      isFound: false,
    },
  ],
};

const dataset = [game1, game2, game3];
