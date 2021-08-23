import React from "react";
import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer = function () {
  const record = [];
  const [sec, setSec] = useState(3);
  const [background, setbackground] = useState("blue");

  const recordTheSec = function (sec) {
    if (sec < 15) {
      record.push(sec);
    }
  };
  useEffect(() => {
    if (sec <= 5) {
      setbackground("red");
    }
    const timer = setTimeout(() => {
      setSec(sec - 1);
    }, 1000);

    if (sec === 0) {
      clearInterval(timer);
      //setSec("You finish!!");
    }
  });
  return (
    <div className={`${styles.timer} ${styles[`${background}`]}`}>
      Current: {sec}
    </div>
  );
};

export default Timer;
