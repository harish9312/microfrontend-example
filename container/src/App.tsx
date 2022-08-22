import React from "react";
import ReactDOM from "react-dom";
import { Login } from 'login/Login';
import "./index.scss";

const App = () => (
  <div className="container">
    <div>Name: container</div>
    <Login />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
