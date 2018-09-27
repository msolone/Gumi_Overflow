import React, { Component } from "react";
import { Link } from "react-router-dom";

class Questions extends Component {
  render() {
    return (
        <section>
        <div className="topBody">
          <p className="allQuestions">All Questions</p>
          <button className="askQuestionButton">Ask Question</button>
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
            <Link to="./Question"><p className="question">Sample Question is?</p></Link>
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
              is?Sample Looooooonger Question is?Sample Looooooonger
              Question is?Sample Looooooonger Question is?
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