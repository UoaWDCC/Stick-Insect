<<<<<<< HEAD
import React, { useState, useRef } from "react";
import axios from "axios";
=======
/* eslint-disable */
import React, { useEffect, useState } from "react";
>>>>>>> 369e2aca08b206bf28699e0979920baa0e88ac58
import styles from "./resultsPage.module.css";

const ResultsPage = ({ isPlayedBefore, gameResults, playAgain }) => {
  const [averageTime, setAverageTime] = useState(null);
  const [foundNum, setFoundNum] = useState(0);

  useEffect(() => {
    const foundRounds = gameResults.filter((round) => round.isFound === true);
    let totalTime = 0;
    foundRounds.map((round) => {
      totalTime = totalTime + round.time;
    });
    for (const round of foundRounds) {
      totalTime = totalTime + round.time;
    }

    setAverageTime(totalTime / foundRounds.length);
    setFoundNum(foundRounds.length);
  }, []);

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
          You spotted <span className={styles.results_info}>{foundNum}</span>{" "}
          stick instects out of <span className={styles.results_info}>20</span>,
          <br /> in an average time of
          <span className={styles.results_info}>
            {" " + Math.round(averageTime * 100) / 100} seconds
          </span>
          !
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
<<<<<<< HEAD
        {/* <button className={styles.play_btn}> Try Again! </button> */}
=======
        <button className={styles.play_btn} onClick={playAgain}>
          {" "}
          Try Again!{" "}
        </button>
>>>>>>> 369e2aca08b206bf28699e0979920baa0e88ac58
      </div>
    </section>
  );
};

export default ResultsPage;
