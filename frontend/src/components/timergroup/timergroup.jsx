import React from "react";
import Timer from "../timer/timer";
import TimerBar from "../timerbar/timerBar";
import styles from "./timergroup.module.css";

const Timergroup = () => {
  return (
    <div className={`${styles.timergroup}`}>
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <TimerBar />
      <Timer />
    </div>
  );
};

export default Timergroup;
