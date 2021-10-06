import React from "react";
import Timergroup from "../timergroup/timergroup";
import styles from "./gamePage.module.css";

// const GamePage = () => {
//   return (
//     <div>
//       <Timergroup />
//     </div>
//   );
// };

// export default GamePage;

const GamePage = (props) => {
  return (
    <section className={styles.whole_wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>This is the main game page</h1>
      </header>
      <div className={styles.body_wrapper}>
        <p className={styles.content}>
          This is where we test out the timer and timer bars
        </p>
        <div className={styles.timer_wrapper}>
          <Timergroup />
        </div>
      </div>
    </section>
  );
};
export default GamePage;
