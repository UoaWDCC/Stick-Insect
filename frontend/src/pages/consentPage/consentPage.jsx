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
      <p>
        By clicking agree below... lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum
      </p>
    </div>
    <div className={styles.btns}>
      <ConsentButton func={switchToInstructionPage} text="I AGREE" />
      <ConsentButton func={switchToLandingPage} text="NO, TAKE ME AWAY" />
    </div>
  </section>
);
export default ConsentPage;
