import React from "react";
import styles from "./landingPage.module.css";
import Buttons, { PlayButton } from "../../components/buttons/button";
import Logos from "../../components/logo/logo";
import Textbox, { LandingTextbox } from "../../components/textbox/textbox";

/**
 * This component is the Landing Page for our app
 *
 * receiving props:
 *   - switchToConsentPage (function): This function is defined in the App component. The "Play now" button will trigger this function.
 */

const LandingPage = ({ switchToConsentPage }) => (
  <section className={styles.whole_wrapper}>
    <header className={styles.header_wrapper}>
      <h1 className={styles.title}>Spot the Stick Insect!</h1>
    </header>
    <div className={styles.body_wrapper}>
      <LandingTextbox
        text="In this game, pretend you are a predator hunting for stick insects!
        Stick insects are masters of camouflage, who use their appearance to
        avoid being caught. You need to find them as quickly as possible by
        clicking on them!"
      />
    </div>

    <div className={styles.bottom_wrapper}>
      <PlayButton func={switchToConsentPage} text="Play Now" />
      <div className={styles.logo_wrapper}>
        <Logos />
      </div>
    </div>
  </section>
);
export default LandingPage;
