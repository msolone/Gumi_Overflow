import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Components/Nav"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <section>
              <div className="topBody">
                <p className="allQuestions">All Questions</p>
                <button className="askQuestionButton">Ask Question</button>
              </div>
              <div className="questions">
                <div className="votesAnswersBox">
                  <div className="votes">
                    <p>0</p>
                    <p className="votesAndAnswers">Votes</p>
                  </div>
                  <div className="answers">
                    <p>0</p>
                    <p className="votesAndAnswers">Answers</p>
                  </div>
                </div>
                <div className="questionBox">
                  <p className="question">Sample Question is?</p>
                  <p className="dateTime">Asked Now</p>
                </div>
              </div>
              <div className="questions">
                <div className="votesAnswersBox">
                  <div className="votes">
                    <p>0</p>
                    <p className="votesAndAnswers">Votes</p>
                  </div>
                  <div className="answers">
                    <p>0</p>
                    <p className="votesAndAnswers">Answers</p>
                  </div>
                </div>
                <div className="questionBox">
                  <p className="question">
                    Sample Looooooonger Question is?Sample Looooooonger Question
                    is?Sample Looooooonger Question is?Sample Looooooonger
                    Question is?Sample Looooooonger Question is?
                  </p>
                  <p className="dateTime">Asked Now</p>
                </div>
              </div>
              <div className="questions">
                <div className="votesAnswersBox">
                  <div className="votes">
                    <p>0</p>
                    <p className="votesAndAnswers">Votes</p>
                  </div>
                  <div className="answers">
                    <p>0</p>
                    <p className="votesAndAnswers">Answers</p>
                  </div>
                </div>
                <div className="questionBox">
                  <p className="question">Sample Question is?</p>
                  <p className="dateTime">Asked Now</p>
                </div>
              </div>
            </section>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
