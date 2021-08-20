import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

fetch("https://ba58ea56-201a-402e-b5dd-eae73f3dc45e.mock.pstmn.io/data", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    alert(JSON.stringify(data));
  });
