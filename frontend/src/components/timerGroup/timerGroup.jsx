import React, { useEffect } from "react";
import Timer from "../timer/timer";
import TimeBar from "../timeBar/timeBar";
import styles from "./timerGroup.module.css";

const TimerGroup = ({ currentRound, totalSec, sec }) => {
  const roundNums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className={`${styles.timergroup}`}>
      <div className={styles.time_bars_container}>
        {roundNums.map((num) => {
          if (num === currentRound) {
            return <TimeBar totalSec={totalSec} sec={sec} />;
          }
          if (num > currentRound) {
            return <TimeBar totalSec={totalSec} sec={totalSec} />;
          }
          return <TimeBar totalSec={totalSec} sec={0} />;
        })}
      </div>
      <div className={styles.timer_container}>
        <Timer sec={sec} />
      </div>
    </div>
  );
};

export default TimerGroup;
