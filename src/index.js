import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ThemeSwitch } from "./ThemeSwitch";

function App() {
  return (
    <div className="App">
      <ThemeSwitch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
