import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav";
import Questions from "./Components/Questions";
import Question from "./Components/Question";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Questions} />
            <Route path="/Question" exact component={Question} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
