import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import HooksApp from "./HooksApp.tsx";
// import CounterApp from "./01-useState/CounterApp.tsx";
// import CounterWithCustomHook from "./01-useState/CounterWithCustomHook.tsx";
// import SimpleForm from "./02-useEffect/SimpleForm.tsx";
// import SimpleFormWithCustomHook from "./02-useEffect/SimpleFormWithCustomHook.tsx";
// import MultipleCustimHooks from "./03-examples/MultipleCustimHooks.tsx";
// import FocusScreen from "./04-useRef/FocusScreen.tsx";
// import Layout from "./05-useLayoutEffect/Layout.tsx";
// import Memorize from "./06-memos/Memorize.tsx";
// import MemoHook from "./06-memos/MemoHook.tsx";
// import CallBackHook from "./06-memos/CallBackHook.tsx";
// import { Padre } from "./07-tarea-memo/Padre.tsx";
// import "./08-useReducer/intro-reducer";
// import TodoApp from "./08-useReducer/TodoApp.tsx";

import { RouterProvider } from "react-router-dom";
import { router } from "./09-useContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
