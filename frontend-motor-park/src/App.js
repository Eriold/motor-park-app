import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Vehicle from "./views/Vehicle";
import Navbar from "./shared/Navbar";

function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/vehicle/:id" component={Vehicle} />
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
