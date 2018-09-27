import React, { Component } from "react";
import { Link } from "react-router-dom";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/questions")
      .then(resp => resp.json())
      .then(questionsData => {
        console.log(questionsData);
        this.setState({
          questions: questionsData
        });
      });
  }

  render() {
    return (
      <section>
        <div className="topBody">
          <p className="allQuestions">All Questions</p>
          <Link to="./AskQuestion" className="askQuestionButton">
            Ask Question
          </Link>
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
            <Link to="./Question">
              <p className="question">Sample Question is?</p>
            </Link>
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
              is?Sample Looooooonger Question is?Sample Looooooonger Question
              is?Sample Looooooonger Question is?
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
    );
  }
}

export default Questions;
