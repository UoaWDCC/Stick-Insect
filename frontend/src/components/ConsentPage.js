import React from "react";
import styles from "./ConsentPage.module.css";

const ConsentPage = ({ pageChange }) => (
  <section className={styles.consent_page_wrapper}>
    <header className={styles.consent_page_header}>
      <h1>Participant Information and Consent Form</h1>
    </header>
    <div className={styles.consent_page_agreement}>
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
    <div className={styles.consent_page_agreement_btns}>
      <button onClick={() => pageChange("question")} type="button">
        {" "}
        I AGREE
      </button>
      <button onClick={() => pageChange("main")} type="button">
        {" "}
        NO, TAKE ME AWAY
      </button>
    </div>
  </section>
);
export default ConsentPage;
