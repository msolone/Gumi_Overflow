import React, { Component } from "react";
import { Link } from "react-router-dom";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: "",
      _questions: {},
      answers: [],
      content: ""
    };
  }

  componentDidMount() {
    fetch(
      `https://localhost:5001/api/questions/${
        this.props.match.params.questionId
      }`
    )
      .then(resp => resp.json())
      .then(questionsData => {
        console.log(questionsData);
        this.setState({
          _questions: questionsData[0]
        });
      });

    this.setState({
      questionId: this.props.match.params.questionId
    });

    fetch(
      `https://localhost:5001/api/answers/${this.props.match.params.questionId}`
    )
      .then(resp => resp.json())
      .then(answersData => {
        console.log(answersData);
        this.setState({
          answers: answersData
        });
      });
  }

  addAUpVote = () => {
    fetch(
      `https://localhost:5001/api/votes/${
        this.props.match.params.questionId
      }/Question/UpVotes`,
      {
        method: "PATCH"
      }
    )
      .then(resp => resp.json())
      .then(Data => {
        console.log(Data);
        this.setState({
          _questions: Data
        });
      });
  };

  addADownVote = () => {
    fetch(
      `https://localhost:5001/api/votes/${
        this.props.match.params.questionId
      }/Question/DownVotes`,
      {
        method: "PATCH"
      }
    )
      .then(resp => resp.json())
      .then(Data => {
        console.log(Data);
        this.setState({
          _questions: Data
        });
      });
  };

  AddUpVoteAnswer = id => {
    console.log(id);
    fetch(`https://localhost:5001/api/votes/${id}/Answer/UpVotes`, {
      method: "PATCH"
    })
      .then(resp => resp.json())
      .then(Data => {
        console.log(Data);
      });
  };

  AddDownVoteAnswer = id => {
    console.log(id);
    fetch(`https://localhost:5001/api/votes/${id}/Answer/DownVotes`, {
      method: "PATCH"
    })
      .then(resp => resp.json())
      .then(Data => {
        console.log(Data);
      });
  };

  handleSubmitAnswer = () => {
    fetch("https://localhost:5001/api/answers", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        content: this.state.content,
        questionId: this.state.questionId
      })
    })
      .then(resp => resp.json())
      .then(Data => {
        console.log(Data);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="topBody oneQuestion">
          <p className="allQuestions">{this.state._questions.title}</p>
          <Link to="./AskQuestion/new" className="askQuestionButton">
            Ask Question
          </Link>
        </div>
        <div className="answeredQuestionBox">
          <div className="votesUpDown">
            <button className="votesUpButton" onClick={this.addAUpVote}>
              ▲
            </button>
            <p>
              {this.state._questions.upVotes - this.state._questions.downVotes}
            </p>
            <button className="votesUpButton" onClick={this.addADownVote}>
              ▼
            </button>
          </div>
          <div>{this.state._questions.content}</div>
        </div>

        <div className="number_of_answers">
          {this.state.answers.length} Answers
        </div>

        {this.state.answers.map((answer, i) => {
          return (
            <section className="answeredQuestionBox" key={answer.id}>
              <div className="votesUpDown">
                <button
                  className="votesUpButton"
                  onClick={() => this.AddUpVoteAnswer(answer.id)}
                >
                  ▲
                </button>
                <p>{answer.upVotes - answer.downVotes}</p>
                <button
                  className="votesUpButton"
                  onClick={() => this.AddDownVoteAnswer(answer.id)}
                >
                  ▼
                </button>
              </div>
              <div>{answer.content}</div>
              <div className="lines" />
            </section>
          );
        })}

        <section className="ask_question_page">
          <form
            className="answerAQuestionForm"
            onSubmit={this.handleSubmitAnswer}
          >
            <div className="ask_question_call_to_action">Your Answer</div>
            <section className="answerAQuestionBoxSection">
              <textarea
                name="content"
                className="answerAQuestionBox"
                type="text"
                placeholder=""
                onChange={this.handleChange}
              />
            </section>
            <div className="lines" />
            <div className="lines" />
            <button className="ask_question_form_submit">
              Post Your Answer
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default Question;
