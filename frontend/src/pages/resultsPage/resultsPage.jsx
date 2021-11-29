/* eslint-disable */
import React, { useState, useRef } from "react";
import styles from "./resultsPage.module.css";

const ResultsPage = (props) => {
  return (
    <section className={styles.whole_wrapper}>
      <h1 className={styles.title}>Spot the Stick Insect</h1>
      <div className={styles.upper_text_container}>
        <p className={styles.thanks_message}>Thank you for participating!</p>
        <p className={styles.results_message}>
          You spotted <span className={styles.results_info}>18</span> stick
          instects out of <span className={styles.results_info}>20</span>,
          <br /> in an average time of{" "}
          <span className={styles.results_info}>9.68 seconds</span>!
        </p>
      </div>

      <p className={styles.email_instruction_message}>
        If you would like to be notified of the outcome of this research, please
        leave <br /> your email address below. If you choose to supply your
        email address, <br />
        we will not for any other purpose, nor will we supply it to any third
        party.{" "}
      </p>

      <div className={styles.email_container}>
        <label className={styles.email_label}> Email: </label>
        <input className={styles.email_input} type="text" />
        <button className={styles.email_btn}> SUBMIT</button>
      </div>
      <br />
      <div className={styles.button_wrapper}>
        <button className={styles.play_btn}> Try Again! </button>
      </div>
    </section>
  );
};

export default ResultsPage;
/* eslint-disable */
