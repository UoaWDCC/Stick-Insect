/**
 * Below is the mock data for games
 */
const MockData = () => {
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
    isFirstAttempt: true,
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
    isFirstAttempt: true,
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
    isFirstAttempt: true,
  };

  const game4 = {
    rounds: [
      {
        roundNum: 1,
        backgroundId: "bg2",
        timeTaken: 13,
        isFound: true,
      },
      {
        roundNum: 2,
        backgroundId: "bg1",
        timeTaken: 7,
        isFound: true,
      },
      {
        roundNum: 3,
        backgroundId: "bg1",
        timeTaken: 9,
        isFound: true,
      },
    ],
    isFirstAttempt: false,
  };

  const game5 = {
    rounds: [
      {
        roundNum: 1,
        backgroundId: "bg2",
        timeTaken: 3,
        isFound: true,
      },
      {
        roundNum: 2,
        backgroundId: "bg2",
        timeTaken: 5,
        isFound: true,
      },
      {
        roundNum: 3,
        backgroundId: "bg1",
        timeTaken: 15,
        isFound: false,
      },
    ],
    isFirstAttempt: false,
  };

  const email1 = {
    email: "test@test.com",
  };

  const email2 = {
    email: "emailt@test.com",
  };

  const email3 = {
    email: "email2@test.com",
  };

  const email4 = {
    email: "user123@example.com",
  };
};

export default MockData;
