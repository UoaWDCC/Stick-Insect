import React from "react";
import Timer from "../timer/timer";
import TimeBar from "../timeBar/timeBar";
import styles from "./timerGroup.module.css";

const TimerGroup = () => {
  return (
    <div className={`${styles.timergroup}`}>
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <TimeBar />
      <Timer />
    </div>
  );
};

export default TimerGroup;
