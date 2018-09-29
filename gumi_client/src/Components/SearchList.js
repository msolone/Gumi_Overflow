import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment'

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: "",
      searchResults: []
    };
  }

  componentDidMount() {
    this.setState({
      searchItem: this.props.match.params.searchTerms
    });
    fetch(
      `https://localhost:5001/api/search?q=${
        this.props.match.params.searchTerms
      }`
    )
      .then(resp => resp.json())
      .then(searchData => {
        console.log(searchData);
        this.setState({
          searchResults: searchData
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
          <p className="allQuestions">Questions that contain "{this.state.searchItem}"</p>
          <Link to="/AskQuestion/new" className="askQuestionButton">
            Ask Question
          </Link>
        </div>
        {this.state.searchResults.map((result, i) => {
          return (
            <div className="questions" key={i}>
              <div className="votesAnswersBox">
                <div className="votes">
                  <p>{result.upVotes - result.downVotes}</p>
                  <p className="votesAndAnswers">Votes</p>
                </div>
                <div className="answers">
                {/* This need to be dynamic based on th specific question */}
                <p>0</p>
                  {/* <p>{this.state.answers.length}</p> */}
                  <p className="votesAndAnswers">Answers</p>
                </div>
              </div>
              <div className="questionBox">
                <Link to={`/${result.id}`}>
                  <p className="question">{result.title}</p>
                </Link>
                <p className="dateTime">Asked {this.getDate(result.date)}</p>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default SearchList;
