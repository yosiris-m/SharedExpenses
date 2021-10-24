import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
