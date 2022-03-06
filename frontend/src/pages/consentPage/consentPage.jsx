import React from "react";
import styles from "./consentPage.module.css";
import { ConsentButton } from "../../components/buttons/button";

/**
 * This component is the Consent Page for our app
 *
 * receiving props:
 *   - switchToLandingPage (function): This function is defined in the App component. The "No, Take Me Away" button will trigger this function.
 *   - switchToInstructionPage (function): This function is defined in the App component. The "I Agree" button will trigger this function.
 */

const ConsentPage = ({ switchToLandingPage, switchToInstructionPage }) => (
  <section className={styles.whole_wrapper}>
    <header className={styles.header}>
      <h1>Participant Information and Consent Form</h1>
    </header>
    <div className={styles.agreement_content}>
      <p>By clicking agree below...</p>
    </div>
    <div className={styles.btns}>
      <ConsentButton func={switchToInstructionPage} text="I AGREE" />
      <ConsentButton func={switchToLandingPage} text="NO, TAKE ME AWAY" />
    </div>
  </section>
);
export default ConsentPage;
