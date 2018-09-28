import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment'

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      answers: [],
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

      fetch("https://localhost:5001/api/answers")
      .then(resp => resp.json())
      .then(answersData => {
        console.log(answersData);
        this.setState({
          answers: answersData
        });
      });
  }

  getDate = (date) => {
    return moment(date).fromNow()
  }

  render() {
    return (
      <section>
        <div className="topBody">
          <p className="allQuestions">All Questions</p>
          <Link to="./AskQuestion/new" className="askQuestionButton">Ask Question</Link>
        </div>
        {this.state.questions.map((question, i) => {
          return (
            <div className="questions" key={i}>
              <div className="votesAnswersBox">
                <div className="votes">
                  <p>{question.upVotes - question.downVotes}</p>
                  <p className="votesAndAnswers">Votes</p>
                </div>
                <div className="answers">
                  <p>{this.state.answers.length}</p>
                  <p className="votesAndAnswers">Answers</p>
                </div>
              </div>
              <div className="questionBox">
                <Link to={`./${question.id}`}>
                  <p className="question">{question.title}</p>
                </Link>
                <p className="dateTime">Asked {this.getDate(question.date)}</p>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Questions;
