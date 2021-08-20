import React from "react";
import "./App.css";
import logo from "./logo.svg";
import MainPage from "./components/MainPage";
import ConsentPage from "./components/ConsentPage";
import QuestionPage from "./components/QuestionPage";

function App() {
  // Declares new setPage variable, which we call "page"
  const PAGE_MAIN = "main";
  const PAGE_CONSENT = "consent";
  const PAGE_QUESTION = "question";

  const [page, setPage] = React.useState(PAGE_MAIN);
  function pageChange(newPage) {
    // Checks to see if the which page the page has been set to
    if (newPage === PAGE_MAIN) {
      setPage(PAGE_MAIN);
    } else if (newPage === PAGE_CONSENT) {
      setPage(PAGE_CONSENT);
    } else if (newPage === PAGE_QUESTION) {
      setPage(PAGE_QUESTION);
    }
  }

  // We pass a callback to the child
  return (
    <div>
      {page === PAGE_MAIN && <MainPage pageChange={pageChange} />}
      {page === PAGE_CONSENT && <ConsentPage pageChange={pageChange} />}
      {page === PAGE_QUESTION && <QuestionPage pageChange={pageChange} />}
    </div>
  );
}
export default App;
