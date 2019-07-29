import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";

function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
