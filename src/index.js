import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { choice, remove } from "./helpers.js";
import foods from "./foods.js";
import index from "./index.js";

const chosenFruit = choice(foods);
console.log(`I'd like one ${chosenFruit} please`);
console.log(`Here you go: ${chosenFruit}`);
const remainingFruits = remove(foods, chosenFruit);
console.log("Delicious! May I have another?");
console.log(`I'm sorry, we're all out. We have ${remainingFruits.length} left`);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
