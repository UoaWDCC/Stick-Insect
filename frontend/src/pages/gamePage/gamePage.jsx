import React, { useState, useEffect } from "react";
import styles from "./gamePage.module.css";
import TimerGroup from "../../components/timerGroup/timerGroup";
import GameBoard from "../../components/gameBoard/gameBoard";

// eslint-disable-next-line
const GamePage = ({ setGameResults, switchToResultsPage }) => {
  const REPEAT_TIME_MS = 1000;
  const TOTAL_SEC = 15;
  const TOTAL_ROUNDS = 20;
  const [sec, setSec] = useState(TOTAL_SEC);
  const [timerHandler, setTimerHandler] = useState(null);
  const [round, setRound] = useState(1);

  const startTimer = () => {
    return setInterval(() => {
      setSec((prevSec) => {
        return prevSec - 1;
      });
    }, [REPEAT_TIME_MS]);
  };

  const stopTimer = () => {
    clearInterval(timerHandler);
    if (round < TOTAL_ROUNDS + 1) {
      setSec(TOTAL_SEC);
      setRound(round + 1);
      setTimerHandler(startTimer());
    }
  };

  const processData = () => {
    /**
     * This is where we gather the game results at the end and send it to App.js
     */
    setGameResults({ results: "some results" });
  };

  useEffect(() => {
    setTimerHandler(startTimer());
    return () => {
      stopTimer();
    };
  }, []);

  useEffect(() => {
    if (sec === 0) {
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
      {round}
      <section className={styles.game_board}>
        <GameBoard currentRound={round} />
      </section>
      <section className={styles.timer_group}>
        <TimerGroup currentRound={round} totalSec={TOTAL_SEC} sec={sec} />
      </section>
    </section>
  );
};
export default GamePage;
