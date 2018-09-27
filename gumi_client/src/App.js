import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="search">
            <img src="../Assets/StackOverflow_Logo2.png" alt="Stack Overflow" />
            <input type="text" placeholder="Search..." />
          </div>
          <h2>Menu</h2>
        </header>
        <section>
          <div className="topBody">
            <p className="allQuestions">All Questions</p>
            <button className="askQuestionButton">Ask Question</button>
          </div>
          <div className="questions">
            <div className="votesAnswersBox">
              <div className="votes">
                <p>0</p>
                <p>Votes</p>
              </div>
              <div className="answers">
                <p>0</p>
                <p>Answers</p>
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
                <p>Votes</p>
              </div>
              <div className="answers">
                <p>0</p>
                <p>Answers</p>
              </div>
            </div>
            <div className="questionBox">
              <p className="question">Sample Looooooonger Question is?Sample Looooooonger Question is?Sample Looooooonger Question is?Sample Looooooonger Question is?Sample Looooooonger Question is?</p>
              <p className="dateTime">Asked Now</p>
            </div>
          </div>
          <div className="questions">
            <div className="votesAnswersBox">
              <div className="votes">
                <p>0</p>
                <p>Votes</p>
              </div>
              <div className="answers">
                <p>0</p>
                <p>Answers</p>
              </div>
            </div>
            <div className="questionBox">
              <p className="question">Sample Question is?</p>
              <p className="dateTime">Asked Now</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
