import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contacts";
import Services from "./Components/Service";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
