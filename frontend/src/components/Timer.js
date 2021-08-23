import React from "react";
import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer = function ({ sec, background }) {
  const record = [];

  return (
    <div className={`${styles.timer} ${styles[`${background}`]}`}>
      Current: {sec === 0 ? "You finsh" : sec}
    </div>
  );
};

export default Timer;
