import React from "react";
import ReactDOM from "react-dom/client";
import HooksApp from "./HooksApp.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HooksApp />
  </React.StrictMode>
);