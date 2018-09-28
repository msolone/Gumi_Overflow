import React, { Component } from "react";
import { Link } from "react-router-dom";

class Question extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     questionId: "",
  //     _questions: ""
  //   };
  // }
  
  // let questionId = this.props.match.params.questions.Id
  // let _question = this.props.location.state.questions

  render() {
    let questions = this.props.questions;
    return (
      <div>
        <div className="topBody oneQuestion">
          <p className="allQuestions">Who is the last Java Dev? Of course V, but anyone attempted the feat recently?</p>
          {/* {questions[questions.Id].title} */}
          <Link to="./AskQuestion" className="askQuestionButton">
            Ask Question
          </Link>
        </div>
        <div className="answeredQuestionBox">
          <div className="votesUpDown">
            <button className="votesUpButton">__upVote</button>
            <p>1576</p>
            <button>downVote</button>
          </div>
          <div>
            V is the last one. He keeps practicing during the SDG Bootcamp and is soon to open his own company employing the
            best minds in the industry, like...
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
