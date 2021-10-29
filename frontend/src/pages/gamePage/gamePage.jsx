import React, { useState, useEffect } from "react";
import styles from "./gamePage.module.css";
import Timer from "../../components/timer/timer";
import TimerBar from "../../components/timeBar/timeBar";
import TimerGroup from "../../components/timerGroup/timerGroup";
import GameBoard from "../../components/gameBoard/gameBoard";

// eslint-disable-next-line
const GamePage = (props) => {
  const REPEAT_TIME_MS = 1000;
  const TIME_LIMIT_S = 15;
  const [sec, setSec] = useState(TIME_LIMIT_S);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timerHandler, setTimerHandler] = useState(null);

  const startTimer = () => {
    return setInterval(() => {
      setSec((prevSec) => {
        return prevSec - 1;
      });
    }, [REPEAT_TIME_MS]);
  };

  const stopTimer = () => {
    clearInterval(timerHandler);
    setIsGameOver(true);
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

  return (
    <section className={styles.whole_wrapper}>
      <section className={styles.game_board}>
        <GameBoard />
      </section>
      <section className={styles.timer_group} />
      {/* <header className={styles.header}>
        <h1 className={styles.title}>This is the main game page</h1>
      </header>
      <div className={styles.body_wrapper}>
        <p className={styles.content}>
          This is where we test out the timer and timer bars
          <div className={styles.body_wrapper}>
            <TimerGroup />
          </div>
        </p>
      </div> */}
    </section>
  );
};
export default GamePage;
