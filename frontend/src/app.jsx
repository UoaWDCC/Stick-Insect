import React, { useState } from "react";
import styles from "./app.module.css";
import ConsentPage from "./components/consentPage/consentPage";
import InstructionPage from "./components/instructionPage/instructionPage";
import LandingPage from "./components/landingPage/landingPage";
import GamePage from "./components/gamePage/gamePage";
/**
 * This component is the parent of all components we have in our app.
 *
 * Contains info about:
 *  current page (state)
 *  possible pages (enums)
 *  page switching function (function)
 *
 * The role of this component:
 *  display the correct page according to its "currentPage" state
 */

function App() {
  // Below are enums for each of the pages
  const PAGE_LANDING = "landing";
  const PAGE_CONSENT = "consent";
  const PAGE_INSTRUCTION = "instruction";
  const PAGE_GAME = "game";
  // const PAGE_RESULTS = "results";

  const [currentPage, setCurrentPage] = useState(PAGE_GAME);

  const switchPage = (page) => {
    setCurrentPage(page);
  };

  const displayPage = () => {
    switch (currentPage) {
      case PAGE_LANDING:
        return (
          <LandingPage switchToConsentPage={() => switchPage(PAGE_CONSENT)} />
        );
      case PAGE_CONSENT:
        return (
          <ConsentPage
            switchToLandingPage={() => switchPage(PAGE_LANDING)}
            switchToInstructionPage={() => switchPage(PAGE_INSTRUCTION)}
          />
        );
      case PAGE_INSTRUCTION:
        return <InstructionPage />;
      case PAGE_GAME:
        return <GamePage />;
      default:
        return null;

      // case PAGE_GAME:
      //   return <GamePage />;
    }
  };

  // We pass a callback to the child
  return (
    <div className={styles.app}>
      <article className={styles.pageFrame}>{displayPage()}</article>
    </div>
  );
}

export default App;
