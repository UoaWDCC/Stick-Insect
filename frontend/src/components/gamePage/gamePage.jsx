import React, { useState, useEffect } from "react";
import styles from "./gamePage.module.css";
import Timer from "../timer/timer";
import TimerBar from "../timerBar/timerBar";
import TimeBar from "../timeBar/timeBar";
import TimerGroup from "../timerGroup/timerGroup";

// eslint-disable-next-line
const GamePage = (props) => {
  const [sec, setSec] = useState(10);

  return (
    <section className={styles.whole_wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>This is the main game page</h1>
      </header>
      <div className={styles.body_wrapper}>
        <p className={styles.content}>
          This is where we test out the timer and timer bars
          <div className={styles.body_wrapper}>
            <TimerBar sec={sec} />
            <Timer />
            <TimeBar />
            <TimerGroup />
          </div>
        </p>
      </div>
    </section>
  );
};
export default GamePage;
