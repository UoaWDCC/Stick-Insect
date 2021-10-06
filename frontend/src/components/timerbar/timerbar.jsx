import React, { useState, useEffect } from "react";
import styles from "./timerbar.module.css";

const ProgressBar = () => {
  const [sec, setSec] = useState(15);
  const [height, setHeight] = useState(sec * 8.6);

  useEffect(() => {
    setTimeout(() => {
      setHeight(height - 8.6);
      setSec(sec - 1);
    }, 1000);
  }, [sec]);
  return (
    <div>
      <div>
        <div className={`${styles.timerbar}`}>
          <div
            style={{ height: `${height}px` }}
            className={`${styles.timerbarinside}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
