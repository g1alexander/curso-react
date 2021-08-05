import ReactDOM from "react-dom";
// import { App } from "./App";
import { CounterApp } from "./CounterApp";
import "./index.css";

const divRoot = document.getElementById("root");

ReactDOM.render(<CounterApp />, divRoot);
// ReactDOM.render(<App saludo="Hola, Soy Goku" />, divRoot);
