import React from "react";
import styles from "./app.module.css";
import LandingPage from "./components/landingPage/landingPage";
// import Timer from "./components/timer/Timer";

// import MainPage from "./components/landingPage/landingPage";
// import ConsentPage from "./components/consentPage/consentPage";
// import QuestionPage from "./components/instructionPage/instructionPage";

function App() {
  // Declares new setPage variable, which we call "page"
  // const PAGE_MAIN = "main";
  // const PAGE_CONSENT = "consent";
  // const PAGE_QUESTION = "question";

  // const [page, setPage] = React.useState(PAGE_MAIN);
  // function pageChange(newPage) {
  //   // Checks to see if the which page the page has been set to
  //   if (newPage === PAGE_MAIN) {
  //     setPage(PAGE_MAIN);
  //   } else if (newPage === PAGE_CONSENT) {
  //     setPage(PAGE_CONSENT);
  //   } else if (newPage === PAGE_QUESTION) {
  //     setPage(PAGE_QUESTION);
  //   }
  // }

  // We pass a callback to the child
  return (
    <div className="App">
      <LandingPage />
      {/* <Timer /> */}
      {/* <ConsentPage /> */}
      {/* {page === PAGE_MAIN && <MainPage pageChange={pageChange} />} */}
      {/* {page === PAGE_CONSENT && <ConsentPage pageChange={pageChange} />} */}
      {/* {page === PAGE_QUESTION && <QuestionPage pageChange={pageChange} />} */}
    </div>
  );
}

export default App;
