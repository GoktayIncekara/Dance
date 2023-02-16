import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./styles.css";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
