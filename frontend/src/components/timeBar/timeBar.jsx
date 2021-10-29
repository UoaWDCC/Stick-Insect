import React, { useState, useEffect } from "react";
import styles from "./timeBar.module.css";

const TimeBar = ({ totalSec, sec }) => {
  // Passes in the background colour and completion percentage as a prop

  const hightPercentage = parseInt((sec / totalSec) * 100, 10);
  console.log(hightPercentage);
  return (
    // Implementation of the timerbar ,, { height: "progress%" })
    // Why is it bad to use jquery
    // 3 Layers to the timerbar component, the underlying main container,
    // the overlay container, and the text in the overlay to show progress.
    <div className={styles.timerbar}>
      <div
        className={styles.timerbarinside}
        style={{ height: `${hightPercentage}%` }}
      />
    </div>
  );
};

export default TimeBar;
