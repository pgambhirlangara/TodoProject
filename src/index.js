import ReactDom from "react-dom";
import React from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("react-container")
);
