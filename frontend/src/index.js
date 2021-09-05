import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/**
 * Below is the code written by Aiden
 */
// fetch("https://ba58ea56-201a-402e-b5dd-eae73f3dc45e.mock.pstmn.io/data", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     alert(JSON.stringify(data));
//   });
