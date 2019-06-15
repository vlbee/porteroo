import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BoxApp from "./BoxApp/BoxApp";
import PorterooApp from "./PorterooApp/PorterooApp";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

// const wards = ["A", "B", "C", "D"];

const App = () => (
  <Router>
    <Route exact path="/" component={BoxApp} />
    <Route path="/porteroo" component={PorterooApp} />
    <Route path={`/box/:ward`} component={BoxApp} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
