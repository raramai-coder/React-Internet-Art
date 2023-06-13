import React from "react"; //just importing what we need for efficiency
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

//ReactDOM.render(<App />, document.getElementById("root"));
