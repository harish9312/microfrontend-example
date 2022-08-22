import React from "react";
import ReactDOM from "react-dom";
import { LoginPage } from 'login/Login';
import "./index.scss";
import { MyProvider } from "./MyProvider";
import { Provider } from 'react-redux'
import { store, userActions } from './store';
import { EmployeeModel } from "./models/EmployeeModel";
const App = () => (
  <MyProvider Provider={Provider} >
    <LoginPage store={store} model={EmployeeModel} />
    <button onClick={() => {
      store.dispatch(userActions.changeUser("adass"))
    }}  >SHOW</button>
  </MyProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
