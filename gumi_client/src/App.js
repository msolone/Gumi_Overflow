import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div class="search">
            <h2>GumiOverflow</h2>
            <input type="text" placeholder="Search..." />
          </div>
          <h2>Menu</h2>
        </header>
      </div>
    );
  }
}

export default App;
