import React, { Component } from "react";
import { Link } from "react-router-dom";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: "",
      _questions: ""
    };
  }

  // let questionId = this.props.match.params.questions.Id
  // let _question = this.props.location.state.questions

  render() {
    return (
      <div>
        <div className="topBody oneQuestion">
          <p className="allQuestions">Sample Question?</p>
          {/* {_question[questionId].title} */}
          <Link to="./AskQuestion" className="askQuestionButton">
            Ask Question
          </Link>
        </div>
        <div className="answeredQuestionBox">
          <div className="votesUpDown">
            <p>upVote</p>
            <p>votes</p>
            <p>downVote</p>
          </div>
          <div>
            Im new to JAVA JDBC and ive been struggling whole day with my
            connection. Im using netbeans and mysql workbench and im getting the
            following errors. Please assis
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
