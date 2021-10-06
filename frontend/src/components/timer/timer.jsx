import React, { useState, useEffect } from "react";

import styles from "./timer.module.css";

// eslint-disable-next-line func-names
const Timer = function () {
  const [sec, setSec] = useState(15);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSec(sec - 1);
    }, 1000);

    if (sec === 0) {
      clearTimeout(timer);
      // setSec("You finish!!");
    }
  }, [sec]);

  return <div className={`${styles.timer}`}>{sec === 0 ? "0" : sec}</div>;
};

export default Timer;
