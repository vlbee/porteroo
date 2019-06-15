import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BoxApp from "./BoxApp/BoxApp";
import PorterooApp from "./PorterooApp";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

const Container = styled("div")`
  max-width: 550px;
  margin: 0 auto;
`;

const App = () => (
  <Container>
    <Router>
      <Route exact path="/" component={BoxApp} />
      <Route path={`/box/:ward`} component={BoxApp} />
      <Route path="/porteroo" component={PorterooApp} />
    </Router>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
