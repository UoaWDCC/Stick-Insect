import React from "react";
import Timer from "../timer/timer";
import TimeBar from "../timeBar/timeBar";
import styles from "./timerGroup.module.css";

const TimerGroup = ({ totalRounds, currentRound, sec }) => {
  return (
    <div className={`${styles.timergroup}`}>
      <div className={styles.time_bars_container}>a</div>
      <div className={styles.timer_container}>a</div>
    </div>
  );
};

export default TimerGroup;
