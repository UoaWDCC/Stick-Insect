import React, { useEffect } from "react";
import Timer from "../timer/timer";
import TimeBar from "../timeBar/timeBar";
import styles from "./timerGroup.module.css";

const TimerGroup = ({ totalRounds, currentRound, totalSec, sec }) => {
  // const timeBars = [];
  // const generateTimeBar = () => {
  //   for (let i = 0; i < 20; i++) {
  //     timeBars.push(<TimeBar />);
  //   }
  // };

  // useEffect(() => {
  //   generateTimeBar();
  // }, []);

  return (
    <div className={`${styles.timergroup}`}>
      <div className={styles.time_bars_container}>
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
        <TimeBar totalSec={totalSec} sec={sec} />
      </div>
      <div className={styles.timer_container}>
        <Timer />
      </div>
    </div>
  );
};

export default TimerGroup;
