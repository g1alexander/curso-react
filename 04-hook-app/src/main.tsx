import React from "react";
import ReactDOM from "react-dom/client";
import HooksApp from "./HooksApp.tsx";
import "./index.css";
import CounterApp from "./01-useState/CounterApp.tsx";
import CounterWithCustomHook from "./01-useState/CounterWithCustomHook.tsx";
import SimpleForm from "./02-useEffect/SimpleForm.tsx";
import SimpleFormWithCustomHook from "./02-useEffect/SimpleFormWithCustomHook.tsx";
import MultipleCustimHooks from "./03-examples/MultipleCustimHooks.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MultipleCustimHooks />
  </React.StrictMode>
);
