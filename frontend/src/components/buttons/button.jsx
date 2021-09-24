import React from "react";
import styles from "./button.module.css";

function PlayButton({ func, text }) {
  return (
    <button onClick={func} className={styles.play_btn} type="button">
      {text}
    </button>
  );
}

function ConsentButton({ func, text }) {
  return (
    <button onClick={func} className={styles.consent_btn} type="button">
      {" "}
      {text}
    </button>
  );
}

export { ConsentButton, PlayButton };
