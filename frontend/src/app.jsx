import React, { useState } from "react";
import styles from "./app.module.css";
import ConsentPage from "./pages/consentPage/consentPage";
import InstructionPage from "./pages/instructionPage/instructionPage";
import LandingPage from "./pages/landingPage/landingPage";
import GamePage from "./pages/gamePage/gamePage";
import ResultsPage from "./pages/resultsPage/resultsPage";
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
  const PAGE_RESULTS = "results";

  const [currentPage, setCurrentPage] = useState(PAGE_LANDING);
  const [isPlayedBefore, setIsPlayedBefore] = useState(false);
  const [gameResults, setGameResults] = useState([]);
  console.log("res app: ", gameResults);
  const switchPage = (page) => {
    setCurrentPage(page);
  };

  const displayPage = () => {
    switch (currentPage) {
      case PAGE_LANDING:
        return (
          <>
            <LandingPage switchToConsentPage={() => switchPage(PAGE_CONSENT)} />
          </>
        );
      case PAGE_CONSENT:
        return (
          <ConsentPage
            switchToLandingPage={() => switchPage(PAGE_LANDING)}
            switchToInstructionPage={() => switchPage(PAGE_INSTRUCTION)}
          />
        );
      case PAGE_INSTRUCTION:
        return (
          <InstructionPage
            setIsPlayedBefore={setIsPlayedBefore}
            switchToGamePage={() => switchPage(PAGE_GAME)}
          />
        );
      case PAGE_GAME:
        return (
          <GamePage
            setGameResults={setGameResults}
            switchToResultsPage={() => switchPage(PAGE_RESULTS)}
          />
        );
      case PAGE_RESULTS:
        return (
          <ResultsPage
            isPlayedBefore={isPlayedBefore}
            gameResults={gameResults.slice(0, 20)}
            playAgain={() => setCurrentPage(PAGE_GAME)}
          />
        );
      default:
        return null;
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
