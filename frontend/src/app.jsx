import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import ConsentPage from "./components/consentPage/consentPage";
import InstructionPage from "./components/instructionPage/instructionPage";
import LandingPage from "./components/landingPage/landingPage";

function App() {
  // Pages
  const PAGE_LANDING = "landing";
  const PAGE_CONSENT = "consent";
  const PAGE_INSTRUCTION = "instruction";

  const [currentPage, setCurrentPage] = useState(PAGE_LANDING);

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
      default:
        return null;
    }
  };

  // We pass a callback to the child
  return (
    <div className={styles.app}>
      <article className={styles.pageFrame}>{displayPage()}</article>
      {/* <Timer /> */}
      {/* <ConsentPage /> */}
      {/* {page === PAGE_MAIN && <MainPage pageChange={pageChange} />} */}
      {/* {page === PAGE_CONSENT && <ConsentPage pageChange={pageChange} />} */}
      {/* {page === PAGE_QUESTION && <QuestionPage pageChange={pageChange} />} */}
    </div>
  );
}

export default App;
