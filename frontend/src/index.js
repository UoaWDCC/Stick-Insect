import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

/**
 * This is the starting point of our react app. As you can see, <App /> component (app.jsx) is rendered here.
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/**
 * Below is the code written by Aiden (I guess). Please uncomment it when you need it!
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

// FETCH GET Example!!
// const fetchData = async () => {
//   const res = await fetch("http://localhost:3001/email", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   const data = await res.json();
//   return data;
// };

// fetchData().then(console.log);

// POST EXAMPLE sending email to backend
