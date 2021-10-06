import React from "react";
import Timer from "../timer/timer";
import ProgressBar from "../timerbar/timerbar";
import styles from "./timergroup.module.css";

const Timergroup = () => {
  return (
    <div className={`${styles.timergroup}`}>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timerbar}`}>
        <ProgressBar />
      </div>
      <div className={`${styles.timer}`}>
        <Timer />
      </div>
    </div>
  );
};

export default Timergroup;
