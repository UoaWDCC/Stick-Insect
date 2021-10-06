import React, { useState, useEffect } from "react";

import styles from "./timer.module.css";

// eslint-disable-next-line func-names
const Timer = function () {
  const [sec, setSec] = useState(15);
  const [background, setbackground] = useState("blue");

  useEffect(() => {
    if (sec <= 5) {
      setbackground("red");
    }
    const timer = setTimeout(() => {
      setSec(sec - 1);
    }, 1000);

    if (sec === 0) {
      clearTimeout(timer);
      // setSec("You finish!!");
    }
  });

  return (
    <div className={`${styles.timer} ${styles[`${background}`]}`}>
      Current: {sec === 0 ? "You finsh" : sec}
    </div>
  );
};

export default Timer;
