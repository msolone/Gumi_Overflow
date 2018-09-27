import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <header>
        <div className="search">
          <Link to="/"><img src="../Assets/StackOverflow_Logo2.png" alt="Stack Overflow" /></Link>
          <input type="text" placeholder="Search..." />
        </div>
        <h2>Menu</h2>
      </header>
    );
  }
}

export default Nav;
