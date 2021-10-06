import React from "react";

import styles from "./timerBar.module.css";

const TimerBar = (props) => {
  // Passes in the background colour and completion percentage as a prop

  const { sec } = props;

  const progress = sec * 10;
  return (
    // Implementation of the timerbar ,, { height: "progress%" })
    // Why is it bad to use jquery
    // 3 Layers to the timerbar component, the underlying main container,
    // the overlay container, and the text in the overlay to show progress.
    <div className={styles.actualprogressbar}>
      <div
        style={{ height: `${progress}px` }}
        className={styles.overlayprogressbar}
      >
        <span className={styles.textStyles}>{sec}</span>
      </div>
    </div>
  );
};

export default TimerBar;
