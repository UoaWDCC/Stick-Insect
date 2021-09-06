import React from "react";
import styles from "./instructionPage.module.css";

const InstructionPage = ({ pageChange }) => (
  <section className={styles.whole_wrapper}>
    <header className={styles.header}>
      <h1 className={styles.title}>Have you played this game before?</h1>
    </header>

    <div className={styles.body_wrapper}>
      <p className={styles.content}>
        You will be shown 20 images with a stick insect hiding in it.
      </p>
      <p className={styles.content}>
        You have 15 seconds to find and click on the stick insect!
      </p>
    </div>

    <div className={styles.bottom_wrapper}>
      <button className={styles.btn} type="button">
        No, this is my first time
      </button>

      <button className={styles.btn} type="button">
        Yes, I have played before
      </button>
    </div>
  </section>
);
export default InstructionPage;
