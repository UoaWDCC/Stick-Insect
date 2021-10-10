import React from "react";
import styles from "./textbox.module.css";

function LandingTextbox({ text }) {
  return (
    <div>
      <p className={styles.landing_body_content}>{text}</p>
    </div>
  );
}

function ConsentTextbox({ text }) {
  return (
    <div>
      <p className={styles.agreement_content}>{text}</p>
    </div>
  );
}

export { LandingTextbox, ConsentTextbox };
