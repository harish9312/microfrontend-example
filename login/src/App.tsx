import { Login } from "./Login";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <Login />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
