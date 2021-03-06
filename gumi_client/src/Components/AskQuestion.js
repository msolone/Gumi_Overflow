import React, { Component } from "react";

class AskQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleSubmitQuestion = e => {
    console.log("first")
    e.preventDefault();
    fetch("https://localhost:5001/api/questions", 
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
    },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content
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
  };

  render() {
    return (
      <section className="ask_question_page">
        <form className="ask_question_form" onSubmit={this.handleSubmitQuestion}>
          <div className="ask_question_call_to_action">Ask a Question</div>
          <section className="ask_question_title_section">
            <div className="ask_question_title">Title</div>
            <input
              name="title"
              className="ask_question_title_input"
              type="text"
              placeholder="  What's your programming question? Be Specific."
              onChange={this.handleChange}
            />
          </section>
          <section className="ask_question_body_section">
            <div className="ask_question_body">Body</div>
            <textarea
              name="content"
              className="ask_question_body_input"
              type="text"
              placeholder=""
              onChange={this.handleChange}
            />
          </section>
          <button
            className="ask_question_form_submit"
           
          >
            Post Your Question
          </button>
        </form>
        <section className="how_to_format_section">
            <div className="format_title">How to Format</div>
            <ul className="fa-ul">
                <li><i className="fa-li fa fa-check-square"></i>put returns between paragraphs</li>
                <li><i className="fa-li fa fa-check-square"></i>or linebreak add 2 spaces at end</li>
                <li><i className="fa-li fa fa-check-square"></i><span className="italic">_italic_</span> or <span className="bold">**bold**</span></li>
                <li><i className="fa-li fa fa-check-square"></i>indent code by 4 spaces</li>
                <li><i className="fa-li fa fa-check-square"></i>backtick escapes `like _so_`</li>
                <li><i className="fa-li fa fa-check-square"></i>quote by placing > at start of line</li>
                <li><i className="fa-li fa fa-check-square"></i>to make links</li>
                <li><i className="fa-li fa fa-check-square"></i>basic HTML also allowed</li>
            </ul>
        </section>
      </section>
    );
  }
}

export default AskQuestion;
