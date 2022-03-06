import React, { useState, useEffect } from "react";
import styles from "./gamePage.module.css";
import TimerGroup from "../../components/timerGroup/timerGroup";
import GameBoard from "../../components/gameBoard/gameBoard";

// eslint-disable-next-line
const GamePage = ({ setGameResults, switchToResultsPage }) => {
  const REPEAT_TIME_MS = 10;
  const TOTAL_SEC = 15;
  const TOTAL_ROUNDS = 20; // Note there need to be TOTAL_ROUNDS + 1 background images in assets
  const [sec, setSec] = useState(TOTAL_SEC);
  const [timerHandler, setTimerHandler] = useState(null);
  const [round, setRound] = useState(1);
  const [forcefulUpdater, setForcefulUpdater] = useState(0); // hacky way of updating stick insect when it is not found

  const startTimer = () => {
    return setInterval(() => {
      setSec((prevSec) => {
        return prevSec - 0.01;
      });
    }, [REPEAT_TIME_MS]);
  };

  const processData = (isFound) => {
    /**
     * This is where we gather the game results at the end and send it to App.js
     */
    let isFoundVal;
    if (!isFound) {
      setForcefulUpdater(forcefulUpdater + 1);
      isFoundVal = false;
    } else {
      isFoundVal = true;
    }
    setGameResults((prevResults) => {
      const newResults = [...prevResults];
      newResults.push({
        round,
        isFound: isFoundVal,
        time: isFoundVal ? `${TOTAL_SEC - sec}` : "-",
      });
      return newResults;
    });
  };

  const stopTimer = (isFound = false) => {
    clearInterval(timerHandler);
    processData(isFound);
    if (round < TOTAL_ROUNDS + 1) {
      setSec(TOTAL_SEC);
      setRound(round + 1);
      setTimerHandler(startTimer());
    }
  };

  useEffect(() => {
    setTimerHandler(startTimer());
    return () => {
      stopTimer();
    };
  }, []);

  useEffect(() => {
    if (sec <= 0) {
      stopTimer();
    }
  }, [sec]);

  useEffect(() => {
    if (round === TOTAL_ROUNDS + 1) {
      processData();
      switchToResultsPage();
    }
  }, [round]);

  return (
    <section className={styles.whole_wrapper}>
      <section className={styles.game_board}>
        {round <= TOTAL_ROUNDS && (
          <GameBoard
            currentRound={round}
            moveToNextRound={stopTimer}
            forcefulUpdater={forcefulUpdater}
          />
        )}
      </section>
      <section className={styles.timer_group}>
        <TimerGroup currentRound={round} totalSec={TOTAL_SEC} sec={sec} />
      </section>
    </section>
  );
};
export default GamePage;
