/* eslint-disable */
import React, { useEffect, useState } from "react";
import styles from "./resultsPage.module.css";

const ResultsPage = ({ isPlayedBefore, gameResults, playAgain }) => {
  const [averageTime, setAverageTime] = useState(null);
  const [foundNum, setFoundNum] = useState(0);
  const [email, setEmail] = useState("");

  const dispatchEmail = async () => {
    const res = await fetch("http://localhost:3001/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();
    alert("Sent!");
    return data;
  };

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
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatchEmail();
          setEmail("");
        }}
        className={styles.email_container}
      >
        <label className={styles.email_label}> Email: </label>
        <input
          className={styles.email_input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.email_btn}> SUBMIT</button>
      </form>
      <br />
      <div className={styles.button_wrapper}>
        <button className={styles.play_btn} onClick={playAgain}>
          Try Again!
        </button>
      </div>
    </section>
  );
};

export default ResultsPage;
/* eslint-disable */
