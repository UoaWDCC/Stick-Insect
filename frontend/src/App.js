import React from "react";
import "./App.css";
// import logo from "./logo.svg";
// import MainPage from "./components/MainPage";
// import ConsentPage from "./components/ConsentPage";
// import QuestionPage from "./components/QuestionPage";
import Timer from "./components/Timer";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Timer />
      {/* <ConsentPage /> */}
    </div>
  );
}

export default App;
