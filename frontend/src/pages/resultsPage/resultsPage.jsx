import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "./resultsPage.module.css";

const ResultsPage = ({ isPlayedBefore, gameResults }) => {
  const emailRef = useRef();
  const handleClickEvent = () => {
    const email = emailRef.current.value;
    axios
      .post("http://localhost:3001/email", {
        email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
        <form>
          <label className={styles.email_label} htmlFor="email">
            Email:
          </label>
          <input
            ref={emailRef}
            className={styles.email_input}
            type="email"
            id="email"
            name="email"
          />
          <button
            type="button"
            className={styles.email_btn}
            onClick={handleClickEvent}
          >
            SUBMIT
          </button>
        </form>
      </div>
      <br />
      <div className={styles.button_wrapper}>
        {/* <button className={styles.play_btn}> Try Again! </button> */}
      </div>
    </section>
  );
};

export default ResultsPage;
