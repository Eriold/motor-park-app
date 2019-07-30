import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/designs/App.css";
import Home from "./views/Home";
import About from "./views/About";
import VehicleId from "./views/VehicleId";
import Navbar from "./shared/Navbar";

function Routes() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/vehicleId/" component={VehicleId} />
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
