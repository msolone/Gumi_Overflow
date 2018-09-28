import React, { Component } from "react";
import { Link } from "react-router-dom";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: "",
      _questions: {}
    };
  }

  componentDidMount() {
    fetch(`https://localhost:5001/api/questions/${this.props.match.params.questionId}`)
      .then(resp => resp.json())
      .then(questionsData => {
        console.log(questionsData);
        console.log(questionsData[0].title)
        this.setState({
          _questions: questionsData[0]
        });
      });
    this.setState({
      questionId: this.props.match.params.questionId
    });
  }
  // let questionId = this.props.match.params.questions.Id
  // let _question = this.props.location.state.questions

  render() {
    return (
      <div>
        <div className="topBody oneQuestion">
          <p className="allQuestions">
          {this.state._questions.title}
          </p>
          
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
            V is the last one. He keeps practicing during the SDG Bootcamp and
            is soon to open his own company employing the best minds in the
            industry, like...
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
