import React from "react";
import styles from "./landingPage.module.css";
import uoaLogo from "../../assets/images/uoa-logo.png";
import wdccLogo from "../../assets/images/wdcc-logo.png";

const LandingPage = ({ switchToConsentPage }) => (
  <section className={styles.whole_wrapper}>
    <header className={styles.header_wrapper}>
      <h1 className={styles.title}>Spot the Stick Insect!</h1>
    </header>
    <div className={styles.body_wrapper}>
      <p className={styles.body_content}>
        In this game, pretend you are a predator hunting for stick insects!
        Stick insects are masters of camouflage, who use their appearance to
        avoid being caught. You need to find them as quickly as possible by
        clicking on them!
      </p>
    </div>

    <div className={styles.bottom_wrapper}>
      <button
        onClick={switchToConsentPage}
        className={styles.play_btn}
        type="button"
      >
        Play Now
      </button>
      <div className={styles.logo_wrapper}>
        <img src={uoaLogo} alt="uoa logo" className={styles.logo} />
        <img src={wdccLogo} alt="wdcc logo" className={styles.logo} />
      </div>
    </div>
  </section>
);
export default LandingPage;
