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
        <div>
          <div className="topBody">
            <p className="allQuestions">All Questions</p>
            <button className="askQuestionButton">Ask Question</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
