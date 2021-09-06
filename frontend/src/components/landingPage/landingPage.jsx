import React from "react";
import styles from "./landingPage.module.css";

// Imports the page change function from App.js
const LandingPage = ({ pageChange }) => (
  <section className={styles.main_page_wrapper}>
    <header className={styles.header_wrapper}>
      <h1 className={styles.header}>Spot the Stick Insect!</h1>
    </header>
    <div className={styles.main_page_body_wrapper}>
      <p className={styles.main_page_body}>
        In this game, pretend you are a predator hunting for stick insects!
        Stick insects are masters of camouflage, who use their appearance to
        avoid being caught. You need to find them as quickly as possible by
        clicking on them!
      </p>
    </div>

    <div className={styles.bottom_wrapper}>
      <div className={styles.bottom_body}>
        <div className={styles.empty} />
        <button
          onClick={() => pageChange("consent")}
          className={styles.main_page_button}
          type="button"
        >
          Play Now
        </button>
        <div className={styles.icon_wrapper}>
          <body className={styles.main_page_icons}>UOA Logo</body>
          <body className={styles.main_page_icons}>WDCC Logo</body>
        </div>
      </div>
    </div>
  </section>
);
export default LandingPage;
