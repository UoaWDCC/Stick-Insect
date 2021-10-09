import React, { useState, useEffect } from "react";
import styles from "./timeBar.module.css";

const TimeBar = () => {
  // Passes in the background colour and completion percentage as a prop

  const [sec, setSec] = useState(15);
  const [height, setHeight] = useState(sec * 8.6);
  useEffect(() => {
    setTimeout(() => {
      setHeight(height - 8.6);
      setSec(sec - 1);
    }, 1000);
  }, [sec]);
  return (
    // Implementation of the timerbar ,, { height: "progress%" })
    // Why is it bad to use jquery
    // 3 Layers to the timerbar component, the underlying main container,
    // the overlay container, and the text in the overlay to show progress.
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

export default TimeBar;
