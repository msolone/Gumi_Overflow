import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchItem: " ",
    }
  }
  

  searchQuestions = () => {
    fetch(`https://localhost:5001/api/search?q=${
      this.state.searchItem
    }`)
      .then(resp => resp.json())
      .then(questionsData => {
        console.log(questionsData);
        this.setState({
          questions: questionsData
        });
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <header>
        <div className="search">
          <Link to="/"><img src="../Assets/StackOverflow_Logo2.png" alt="Stack Overflow" /></Link>
          <input type="text" placeholder="Search..." onChange={this.handleChange} name="searchItem"/>
          <button onClick={this.searchQuestions}>This is a ugly button</button>
        </div>
        <h2>Menu</h2>
      </header>
    );
  }
}

export default Nav;
