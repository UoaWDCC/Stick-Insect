import React from "react";
import styles from "./textbox.module.css";

function TextWrapper({ text }) {
  return (
    <div>
      <p className={styles.landing_body_content}>{text}</p>
    </div>
  );
}

export default TextWrapper;
