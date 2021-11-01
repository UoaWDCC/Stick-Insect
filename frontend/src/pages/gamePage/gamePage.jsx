import React, { useState, useEffect } from "react";
import styles from "./gamePage.module.css";
import Timer from "../../components/timer/timer";
import TimerBar from "../../components/timeBar/timeBar";
import TimerGroup from "../../components/timerGroup/timerGroup";
import GameBoard from "../../components/gameBoard/gameBoard";

// eslint-disable-next-line
const GamePage = (props) => {
  const REPEAT_TIME_MS = 1000;
  const TOTAL_SEC = 15;
  const TOTAL_ROUNDS = 20;
  const [sec, setSec] = useState(TOTAL_SEC);
  const [isGameOver, setIsGameOver] = useState(false);
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
        <GameBoard currentRound={round} />
      </section>
      <section className={styles.timer_group}>
        <TimerGroup
          totalRounds={TOTAL_ROUNDS}
          currentRound={round}
          totalSec={TOTAL_SEC}
          sec={sec}
        />
      </section>
    </section>
  );
};
export default GamePage;
