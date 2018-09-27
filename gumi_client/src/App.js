import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="search">
            <img src="../Assets/StackLogo.png" />
            <input type="text" placeholder="Search..." />
          </div>
          <h2>Menu</h2>
        </header>
        <body>
          <div className="topBody">
            <p className="allQuestions">All Questions</p>
            <button className="askQuestionButton">Ask Question</button>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
