import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./Mike.css";

import Nav from "./Components/Nav";
import Questions from "./Components/Questions";
import Question from "./Components/Question";
import AskQuestion from "./Components/AskQuestion";
import SearchList from './Components/SearchList';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Questions} />
            <Route path="/search/question/:searchTerms" exact component={SearchList} />
            <Route path="/:questionId" exact component={Question} />
            <Route path="/AskQuestion/new" exact component={AskQuestion} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
