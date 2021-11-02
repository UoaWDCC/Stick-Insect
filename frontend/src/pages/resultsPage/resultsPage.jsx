import React from "react";

const ResultsPage = ({ isPlayedBefore, gameResults }) => (
  <div>
    <h1>Results</h1>
    <p>Played before: {isPlayedBefore}</p>
    <p>Game Results: {JSON.stringify(gameResults)}</p>
  </div>
);

export default ResultsPage;
