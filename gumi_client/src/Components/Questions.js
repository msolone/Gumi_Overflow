import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment'

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
                  <p>0</p>
                  <p className="votesAndAnswers">Answers</p>
                </div>
              </div>
              <div className="questionBox">
                <Link to={`./${question.id}`}>
                {/* <Link to={{pathname: `/Question/${i}`, state: {questions: this.props.questions}}} key={i}> */}
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
